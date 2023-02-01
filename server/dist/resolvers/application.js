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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationResolver = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Application_1 = require("../entities/Application");
let ApplicationResolver = class ApplicationResolver {
    async updateApplication(userId, item, firstName, middleName, lastName, phone, organization, city, state, inPerson, wholeEvent) {
        switch (item) {
            case "firstName":
                await (0, typeorm_1.getConnection)()
                    .getRepository(Application_1.Application)
                    .createQueryBuilder()
                    .update({ firstName })
                    .where({ userId })
                    .returning("*")
                    .execute();
                break;
            case "middleName":
                await (0, typeorm_1.getConnection)()
                    .getRepository(Application_1.Application)
                    .createQueryBuilder()
                    .update({ middleName })
                    .where({ userId })
                    .returning("*")
                    .execute();
                break;
            case "lastName":
                await (0, typeorm_1.getConnection)()
                    .getRepository(Application_1.Application)
                    .createQueryBuilder()
                    .update({ lastName })
                    .where({ userId })
                    .returning("*")
                    .execute();
                break;
            case "phone":
                await (0, typeorm_1.getConnection)()
                    .getRepository(Application_1.Application)
                    .createQueryBuilder()
                    .update({ phone })
                    .where({ userId })
                    .returning("*")
                    .execute();
                break;
            case "organization":
                await (0, typeorm_1.getConnection)()
                    .getRepository(Application_1.Application)
                    .createQueryBuilder()
                    .update({ organization })
                    .where({ userId })
                    .returning("*")
                    .execute();
                break;
            case "city":
                await (0, typeorm_1.getConnection)()
                    .getRepository(Application_1.Application)
                    .createQueryBuilder()
                    .update({ city })
                    .where({ userId })
                    .returning("*")
                    .execute();
                break;
            case "state":
                await (0, typeorm_1.getConnection)()
                    .getRepository(Application_1.Application)
                    .createQueryBuilder()
                    .update({ state })
                    .where({ userId })
                    .returning("*")
                    .execute();
                break;
            case "inPerson":
                await (0, typeorm_1.getConnection)()
                    .getRepository(Application_1.Application)
                    .createQueryBuilder()
                    .update({ inPerson })
                    .where({ userId })
                    .returning("*")
                    .execute();
                break;
            case "wholeEvent":
                await (0, typeorm_1.getConnection)()
                    .getRepository(Application_1.Application)
                    .createQueryBuilder()
                    .update({ wholeEvent })
                    .where({ userId })
                    .returning("*")
                    .execute();
                break;
        }
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
    __param(1, (0, type_graphql_1.Arg)("item", () => String)),
    __param(2, (0, type_graphql_1.Arg)("firstName", () => String, { nullable: true })),
    __param(3, (0, type_graphql_1.Arg)("middleName", () => String, { nullable: true })),
    __param(4, (0, type_graphql_1.Arg)("lastName", () => String, { nullable: true })),
    __param(5, (0, type_graphql_1.Arg)("phone", () => String, { nullable: true })),
    __param(6, (0, type_graphql_1.Arg)("organization", () => String, { nullable: true })),
    __param(7, (0, type_graphql_1.Arg)("city", () => String, { nullable: true })),
    __param(8, (0, type_graphql_1.Arg)("state", () => String, { nullable: true })),
    __param(9, (0, type_graphql_1.Arg)("inPerson", () => String, { nullable: true })),
    __param(10, (0, type_graphql_1.Arg)("wholeEvent", () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, String, String, String, String, String, String]),
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