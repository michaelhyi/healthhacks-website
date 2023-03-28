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
exports.ApplicationResolver = void 0;
const moment_1 = __importDefault(require("moment"));
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Application_1 = require("../entities/Application");
const User_1 = require("../entities/User");
const appendApplicationSpreadsheet_1 = __importDefault(require("../utils/appendApplicationSpreadsheet"));
const emails_1 = require("../utils/emails");
const types_1 = require("../utils/types");
const sgMail = require("@sendgrid/mail");
let ApplicationResolver = class ApplicationResolver {
    async deleteApplications() {
        await Application_1.Application.delete({});
        return true;
    }
    async submitApplication(userId, firstName, lastName, email, form) {
        await (0, typeorm_1.getConnection)()
            .getRepository(Application_1.Application)
            .createQueryBuilder()
            .update({
            phone: form.phone,
            organization: form.organization,
            city: form.city,
            state: form.state,
            inPerson: form.inPerson,
            wholeEvent: form.wholeEvent,
            background: form.background,
            whyUs: form.whyUs,
            howHear: form.howHear,
            team: form.team,
            linkedIn: form.linkedIn,
            dietaryRestrictions: form.dietaryRestrictions,
            transportation: form.transportation,
            other: form.other,
        })
            .where({ userId })
            .returning("*")
            .execute();
        await (0, typeorm_1.getConnection)()
            .getRepository(User_1.User)
            .createQueryBuilder()
            .update({
            status: "applied"
        })
            .where({ userId })
            .returning("*")
            .execute();
        const newRow = {
            Timestamp: (0, moment_1.default)().format("MMMM Do YYYY, h:mm:ss a"),
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Phone: form.phone,
            Organization: form.organization,
            City: form.city,
            State: form.state,
            InPerson: form.inPerson,
            WholeEvent: form.wholeEvent,
            Background: form.background.toString(),
            WhyUs: form.whyUs.toString(),
            HowHear: form.howHear,
            Team: form.team,
            LinkedIn: form.linkedIn,
            DietaryRestrictions: form.dietaryRestrictions,
            Transportation: form.transportation,
            Other: form.other,
        };
        await (0, appendApplicationSpreadsheet_1.default)(newRow);
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: email,
            from: process.env.SENDGRID_EMAIL,
            subject: "health{hacks} 2023 Application Confirmation",
            html: emails_1.applicationConfirmationHTML,
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
    async updateApplication(userId, form) {
        await (0, typeorm_1.getConnection)()
            .getRepository(Application_1.Application)
            .createQueryBuilder()
            .update({
            phone: form.phone,
            organization: form.organization,
            city: form.city,
            state: form.state,
            inPerson: form.inPerson,
            wholeEvent: form.wholeEvent,
            background: form.background,
            whyUs: form.whyUs,
            howHear: form.howHear,
            team: form.team,
            linkedIn: form.linkedIn,
            dietaryRestrictions: form.dietaryRestrictions,
            transportation: form.transportation,
            other: form.other,
        })
            .where({ userId })
            .returning("*")
            .execute();
        return true;
    }
    async readApplications() {
        const applications = await Application_1.Application.find();
        return applications;
    }
    async readApplication(userId) {
        const application = await Application_1.Application.findOne({ where: { userId } });
        return application;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApplicationResolver.prototype, "deleteApplications", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("userId", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("firstName", () => String)),
    __param(2, (0, type_graphql_1.Arg)("lastName", () => String)),
    __param(3, (0, type_graphql_1.Arg)("email", () => String)),
    __param(4, (0, type_graphql_1.Arg)("form", () => types_1.Form)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, types_1.Form]),
    __metadata("design:returntype", Promise)
], ApplicationResolver.prototype, "submitApplication", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("userId", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("form", () => types_1.Form)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, types_1.Form]),
    __metadata("design:returntype", Promise)
], ApplicationResolver.prototype, "updateApplication", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Application_1.Application]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApplicationResolver.prototype, "readApplications", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Application_1.Application),
    __param(0, (0, type_graphql_1.Arg)("userId", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ApplicationResolver.prototype, "readApplication", null);
ApplicationResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ApplicationResolver);
exports.ApplicationResolver = ApplicationResolver;
//# sourceMappingURL=application.js.map