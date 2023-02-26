"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const argon2_1 = __importDefault(require("argon2"));
const EmailValidator = __importStar(require("email-validator"));
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Application_1 = require("../entities/Application");
const User_1 = require("../entities/User");
const emails_1 = require("../utils/emails");
const types_1 = require("../utils/types");
const sgMail = require("@sendgrid/mail");
let UserResolver = class UserResolver {
    async forgotPassword(email) {
        const user = await User_1.User.findOne({ where: { email } });
        if (!EmailValidator.validate(email) || !user) {
            return {
                success: false,
                error: "Invalid Email",
            };
        }
        const token = (0, uuid_1.v4)();
        await (0, typeorm_1.getConnection)()
            .getRepository(User_1.User)
            .createQueryBuilder()
            .update({
            forgotPasswordToken: token,
            forgotPasswordExpiration: (new Date().getTime() +
                1000 * 60 * 60 * 24 * 2).toString(),
        })
            .where({ id: user.id })
            .returning("*")
            .execute();
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: email,
            from: process.env.SENDGRID_EMAIL,
            subject: "health{hacks} 2023 Password Change",
        };
        sgMail
            .send(msg)
            .then(() => {
            console.log("Email sent");
        })
            .catch((error) => {
            console.error(error);
        });
        return {
            success: true,
        };
    }
    async verifyUser(token) {
        const user = await User_1.User.findOne({ where: { verifyToken: token } });
        const date = new Date().getTime();
        const expiration = parseInt(user === null || user === void 0 ? void 0 : user.verifyExpiration);
        if (!user) {
            return {
                success: false,
                error: "Invalid token.",
            };
        }
        if (!user.verified) {
            if (date > expiration) {
                return {
                    success: false,
                    error: "Token expired.",
                };
            }
            else {
                await (0, typeorm_1.getConnection)()
                    .getRepository(User_1.User)
                    .createQueryBuilder()
                    .update({
                    verified: true,
                })
                    .where({ id: user.id })
                    .returning("*")
                    .execute();
                return {
                    success: true,
                };
            }
        }
        return {
            success: false,
            error: "User already verified.",
        };
    }
    async deleteUsers() {
        await User_1.User.delete({});
        return true;
    }
    async resendVerificationEmail(id, email) {
        const token = (0, uuid_1.v4)();
        await (0, typeorm_1.getConnection)()
            .getRepository(User_1.User)
            .createQueryBuilder()
            .update({
            verifyToken: token,
            verifyExpiration: (new Date().getTime() +
                1000 * 60 * 60 * 24 * 2).toString(),
        })
            .where({ id })
            .returning("*")
            .execute();
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: email,
            from: process.env.SENDGRID_EMAIL,
            subject: "health{hacks} 2023 Email Verification",
            html: (0, emails_1.verifyHTML)(token),
        };
        sgMail
            .send(msg)
            .then(() => {
            console.log("Email sent");
        })
            .catch((error) => {
            console.error(error);
        });
        return true;
    }
    async readUser(id) {
        const user = await User_1.User.findOne({ where: { id } });
        return user;
    }
    async readUsers() {
        const users = await User_1.User.find();
        return users;
    }
    async register(email, password, firstName, lastName) {
        if (!EmailValidator.validate(email)) {
            return {
                error: {
                    field: "Email",
                    message: "Invalid email.",
                },
            };
        }
        if (password.length <= 2) {
            return {
                error: {
                    field: "Password",
                    message: "Password must be greater than 2 characters.",
                },
            };
        }
        if (firstName.length === 0) {
            return {
                error: {
                    field: "First Name",
                    message: "You must enter a first name.",
                },
            };
        }
        if (lastName.length === 0) {
            return {
                error: {
                    field: "Last Name",
                    message: "You must enter a last name.",
                },
            };
        }
        let user;
        const token = (0, uuid_1.v4)();
        try {
            user = await User_1.User.create({
                email,
                password: await argon2_1.default.hash(password),
                firstName,
                lastName,
                verifyToken: token,
                verifyExpiration: (new Date().getTime() +
                    1000 * 60 * 60 * 24 * 2).toString(),
            }).save();
            await Application_1.Application.create({
                userId: user.id,
            }).save();
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);
            const msg = {
                to: email,
                from: process.env.SENDGRID_EMAIL,
                subject: "health{hacks} 2023 Email Verification",
                html: (0, emails_1.verifyHTML)(token),
            };
            sgMail
                .send(msg)
                .then(() => {
                console.log("Email sent");
            })
                .catch((error) => {
                console.error(error);
            });
        }
        catch (e) {
            if (e.detail.includes("already exists") ||
                e.detail.includes("duplicate key")) {
                return {
                    error: {
                        field: "Email",
                        message: "Email already exists.",
                    },
                };
            }
        }
        return { user };
    }
    async login(email, password) {
        if (!email.includes("@")) {
            return {
                error: {
                    field: "Email",
                    message: "Invalid email.",
                },
            };
        }
        const user = await User_1.User.findOne({ where: { email } });
        if (!user) {
            return {
                error: { field: "Email", message: "Email does not exist." },
            };
        }
        const valid = await argon2_1.default.verify(user.password, password);
        if (!valid) {
            return {
                error: {
                    field: "Password",
                    message: "Incorrect password.",
                },
            };
        }
        return {
            user,
        };
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => types_1.Response),
    __param(0, (0, type_graphql_1.Arg)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "forgotPassword", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => types_1.Response),
    __param(0, (0, type_graphql_1.Arg)("token")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "verifyUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUsers", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "resendVerificationEmail", null);
__decorate([
    (0, type_graphql_1.Query)(() => User_1.User),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "readUser", null);
__decorate([
    (0, type_graphql_1.Query)(() => [User_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "readUsers", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => types_1.UserResponse),
    __param(0, (0, type_graphql_1.Arg)("email")),
    __param(1, (0, type_graphql_1.Arg)("password")),
    __param(2, (0, type_graphql_1.Arg)("firstName")),
    __param(3, (0, type_graphql_1.Arg)("lastName")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => types_1.UserResponse),
    __param(0, (0, type_graphql_1.Arg)("email")),
    __param(1, (0, type_graphql_1.Arg)("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.js.map