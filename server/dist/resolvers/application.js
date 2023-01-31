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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Application_1 = require("../entities/Application");
let ApplicationResolver = class ApplicationResolver {
    async readApplications() {
        const applications = await Application_1.Application.find();
        return applications;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Application_1.Application]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApplicationResolver.prototype, "readApplications", null);
ApplicationResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ApplicationResolver);
exports.ApplicationResolver = ApplicationResolver;
//# sourceMappingURL=application.js.map