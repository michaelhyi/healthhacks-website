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
const Confirmation_1 = require("../entities/Confirmation");
const appendConfirmationSpreadsheet_1 = __importDefault(require("../utils/appendConfirmationSpreadsheet"));
const emails_1 = require("../utils/emails");
const types_1 = require("../utils/types");
const sgMail = require("@sendgrid/mail");
let ConfirmationResolver = class ConfirmationResolver {
    async deleteConfirmations() {
        await Confirmation_1.Confirmation.delete({});
        return true;
    }
    async submitConfirmation(userId, firstName, lastName, email, cform) {
        await (0, typeorm_1.getConnection)()
            .getRepository(Confirmation_1.Confirmation)
            .createQueryBuilder()
            .update({
            status: "Submitted",
            inPerson: cform.inPerson,
            tracks1: cform.tracks1,
            tracks2: cform.tracks2,
            liability: cform.liability,
            liabilityDate: cform.liabilityDate,
            other: cform.other,
            paid: cform.other,
        })
            .where({ userId })
            .returning("*")
            .execute();
        const newRow = {
            Timestamp: (0, moment_1.default)().format("MMMM Do YYYY, h:mm:ss a"),
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            InPerson: cform.inPerson,
            Tracks1: cform.tracks1,
            Tracks2: cform.tracks2,
            Liability: cform.liability,
            LiabilityDate: cform.liabilityDate,
            Other: cform.other,
            Paid: cform.other,
        };
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
    async updateConfirmation(userId, cform) {
        await (0, typeorm_1.getConnection)()
            .getRepository(Confirmation_1.Confirmation)
            .createQueryBuilder()
            .update({
            inPerson: cform.inPerson,
            tracks1: cform.tracks1,
            tracks2: cform.tracks2,
            liability: cform.liability,
            liabilityDate: cform.liabilityDate,
            other: cform.other,
            paid: cform.other,
        })
            .where({ userId })
            .returning("*")
            .execute();
        return true;
    }
    async readConfirmations() {
        const applications = await Confirmation_1.Confirmation.find();
        return applications;
    }
    async readConfirmation(userId) {
        const application = await Confirmation_1.Confirmation.findOne({ where: { userId } });
        return application;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConfirmationResolver.prototype, "deleteConfirmations", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("userId", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("firstName", () => String)),
    __param(2, (0, type_graphql_1.Arg)("lastName", () => String)),
    __param(3, (0, type_graphql_1.Arg)("email", () => String)),
    __param(4, (0, type_graphql_1.Arg)("cform", () => types_1.CForm)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, types_1.CForm]),
    __metadata("design:returntype", Promise)
], ConfirmationResolver.prototype, "submitConfirmation", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("userId", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("cform", () => types_1.CForm)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, types_1.CForm]),
    __metadata("design:returntype", Promise)
], ConfirmationResolver.prototype, "updateConfirmation", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Confirmation_1.Confirmation]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConfirmationResolver.prototype, "readConfirmations", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Confirmation_1.Confirmation),
    __param(0, (0, type_graphql_1.Arg)("userId", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConfirmationResolver.prototype, "readConfirmation", null);
ConfirmationResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ConfirmationResolver);
exports.ConfirmationResolver = ConfirmationResolver;
//# sourceMappingURL=confirmation.js.map