"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.ConfirmationResolver = void 0;
const moment_1 = __importDefault(require("moment"));
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const appendConfirmationSpreadsheet_1 = __importDefault(require("../utils/appendConfirmationSpreadsheet"));
const emails_1 = require("../utils/emails");
const updatePaid_1 = __importDefault(require("../utils/updatePaid"));
const sgMail = require("@sendgrid/mail");
let ConfirmationResolver = class ConfirmationResolver {
    async submitConfirmation(userId, firstName, lastName, email, inPerson, liability, liabilityDate, other, paid, tracks1, tracks2) {
        const newRow = {
            Timestamp: (0, moment_1.default)().format("MMMM Do YYYY, h:mm:ss a"),
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            InPerson: inPerson,
            Tracks1: tracks1,
            Tracks2: tracks2,
            Liability: liability,
            LiabilityDate: liabilityDate,
            Other: other,
            Paid: paid,
        };
        console.log(newRow);
        await (0, appendConfirmationSpreadsheet_1.default)(newRow);
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: email,
            from: process.env.SENDGRID_EMAIL,
            subject: "health{hacks} 2023 Attendee Confirmation",
            html: emails_1.attendeeConfirmationHTML,
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
    async updatePayment(email, paid) {
        if (paid) {
            try {
                await (0, updatePaid_1.default)(email, paid);
                await (0, typeorm_1.getConnection)()
                    .getRepository(User_1.User)
                    .createQueryBuilder()
                    .update({
                    status: "paid",
                })
                    .where({ email })
                    .returning("*")
                    .execute();
                return true;
            }
            catch (error) {
                console.error("Error updating payment status:", error);
                return false;
            }
        }
        return false;
    }
    async setUserPaidPending(email) {
        await (0, typeorm_1.getConnection)()
            .getRepository(User_1.User)
            .createQueryBuilder()
            .update({
            status: "pending",
        })
            .where({ email })
            .returning("*")
            .execute();
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("userId", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("firstName", () => String)),
    __param(2, (0, type_graphql_1.Arg)("lastName", () => String)),
    __param(3, (0, type_graphql_1.Arg)("email", () => String)),
    __param(4, (0, type_graphql_1.Arg)("inPerson", () => String)),
    __param(5, (0, type_graphql_1.Arg)("liability", () => String)),
    __param(6, (0, type_graphql_1.Arg)("liabilityDate", () => String)),
    __param(7, (0, type_graphql_1.Arg)("other", () => String)),
    __param(8, (0, type_graphql_1.Arg)("paid", () => String)),
    __param(9, (0, type_graphql_1.Arg)("tracks1", () => String)),
    __param(10, (0, type_graphql_1.Arg)("tracks2", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], ConfirmationResolver.prototype, "submitConfirmation", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("email", () => String)),
    __param(1, (0, type_graphql_1.Arg)("paid", () => Boolean)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", Promise)
], ConfirmationResolver.prototype, "updatePayment", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("userId", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConfirmationResolver.prototype, "setUserPaidPending", null);
ConfirmationResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ConfirmationResolver);
exports.ConfirmationResolver = ConfirmationResolver;
//# sourceMappingURL=confirmation.js.map