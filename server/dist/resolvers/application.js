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
const date_fns_1 = require("date-fns");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Application_1 = require("../entities/Application");
const appendApplicationSpreadsheet_1 = __importDefault(require("../utils/appendApplicationSpreadsheet"));
const sgMail = require("@sendgrid/mail");
let ApplicationResolver = class ApplicationResolver {
    async submitApplication(userId, firstName, lastName, email, phone, organization, city, state, inPerson, wholeEvent, background, whyUs, howHear, team, linkedIn, dietaryRestrictions, transportation, other) {
        console.log("resend initaited");
        await (0, typeorm_1.getConnection)()
            .getRepository(Application_1.Application)
            .createQueryBuilder()
            .update({
            phone: phone,
            organization: organization,
            city: city,
            state: state,
            inPerson: inPerson,
            wholeEvent: wholeEvent,
            background: background,
            whyUs: whyUs,
            howHear: howHear,
            team: team,
            linkedIn: linkedIn,
            dietaryRestrictions: dietaryRestrictions,
            transportation: transportation,
            other: other,
        })
            .where({ userId })
            .returning("*")
            .execute();
        const newRow = {
            Timestamp: (0, date_fns_1.format)(new Date(), "Pp"),
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Phone: phone,
            Organization: organization,
            City: city,
            State: state,
            InPerson: inPerson,
            WholeEvent: wholeEvent,
            Background: background,
            WhyUs: whyUs,
            HowHear: howHear,
            Team: team,
            LinkedIn: linkedIn,
            DietaryRestrictions: dietaryRestrictions,
            Transportation: transportation,
            Other: other,
        };
        await (0, appendApplicationSpreadsheet_1.default)(newRow);
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: email,
            from: process.env.SENDGRID_EMAIL,
            subject: "health{hacks} 2023 Application Confirmation",
            html: `Dear ${firstName},<br/><br/>Thank you for your application to health{hacks}! Here are your application details:<br/><br/>${JSON.stringify(newRow)}`,
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
    async updateApplication(userId, phone, organization, city, state, inPerson, wholeEvent, background, whyUs, howHear, team, linkedIn, dietaryRestrictions, transportation, other) {
        await (0, typeorm_1.getConnection)()
            .getRepository(Application_1.Application)
            .createQueryBuilder()
            .update({
            phone,
            organization,
            city,
            state,
            inPerson,
            wholeEvent,
            background,
            whyUs,
            howHear,
            team,
            linkedIn,
            dietaryRestrictions,
            transportation,
            other,
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
    __param(0, (0, type_graphql_1.Arg)("userId", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("firstName", () => String)),
    __param(2, (0, type_graphql_1.Arg)("lastName", () => String)),
    __param(3, (0, type_graphql_1.Arg)("email", () => String)),
    __param(4, (0, type_graphql_1.Arg)("phone", () => String)),
    __param(5, (0, type_graphql_1.Arg)("organization", () => String)),
    __param(6, (0, type_graphql_1.Arg)("city", () => String)),
    __param(7, (0, type_graphql_1.Arg)("state", () => String)),
    __param(8, (0, type_graphql_1.Arg)("inPerson", () => String)),
    __param(9, (0, type_graphql_1.Arg)("wholeEvent", () => String)),
    __param(10, (0, type_graphql_1.Arg)("background", () => String)),
    __param(11, (0, type_graphql_1.Arg)("whyUs", () => String)),
    __param(12, (0, type_graphql_1.Arg)("howHear", () => String)),
    __param(13, (0, type_graphql_1.Arg)("team", () => String)),
    __param(14, (0, type_graphql_1.Arg)("linkedIn", () => String)),
    __param(15, (0, type_graphql_1.Arg)("dietaryRestrictions", () => String)),
    __param(16, (0, type_graphql_1.Arg)("transportation", () => String)),
    __param(17, (0, type_graphql_1.Arg)("other", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], ApplicationResolver.prototype, "submitApplication", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("userId", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("phone", () => String)),
    __param(2, (0, type_graphql_1.Arg)("organization", () => String)),
    __param(3, (0, type_graphql_1.Arg)("city", () => String)),
    __param(4, (0, type_graphql_1.Arg)("state", () => String)),
    __param(5, (0, type_graphql_1.Arg)("inPerson", () => String)),
    __param(6, (0, type_graphql_1.Arg)("wholeEvent", () => String)),
    __param(7, (0, type_graphql_1.Arg)("background", () => String)),
    __param(8, (0, type_graphql_1.Arg)("whyUs", () => String)),
    __param(9, (0, type_graphql_1.Arg)("howHear", () => String)),
    __param(10, (0, type_graphql_1.Arg)("team", () => String)),
    __param(11, (0, type_graphql_1.Arg)("linkedIn", () => String)),
    __param(12, (0, type_graphql_1.Arg)("dietaryRestrictions", () => String)),
    __param(13, (0, type_graphql_1.Arg)("transportation", () => String)),
    __param(14, (0, type_graphql_1.Arg)("other", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, String, String, String, String, String, String, String, String, String, String]),
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