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
exports.Application = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
let Application = class Application extends typeorm_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.status = "pending";
        this.phone = "";
        this.organization = "";
        this.city = "";
        this.state = "";
        this.inPerson = "";
        this.wholeEvent = "";
        this.howHear = "";
        this.team = "";
        this.linkedIn = "";
        this.dietaryRestrictions = "";
        this.transportation = "";
        this.other = "";
    }
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Application.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", Number)
], Application.prototype, "userId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)("text", { default: "pending" }),
    __metadata("design:type", String)
], Application.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)("text", { default: "" }),
    __metadata("design:type", String)
], Application.prototype, "phone", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)("text", { default: "" }),
    __metadata("design:type", String)
], Application.prototype, "organization", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)("text", { default: "" }),
    __metadata("design:type", String)
], Application.prototype, "city", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)("text", { default: "" }),
    __metadata("design:type", String)
], Application.prototype, "state", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)("text", { default: "" }),
    __metadata("design:type", String)
], Application.prototype, "inPerson", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)("text", { default: "" }),
    __metadata("design:type", String)
], Application.prototype, "wholeEvent", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String]),
    (0, typeorm_1.Column)("text", { array: true, default: () => "ARRAY[]::text[]" }),
    __metadata("design:type", Array)
], Application.prototype, "background", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String]),
    (0, typeorm_1.Column)("text", { array: true, default: () => "ARRAY[]::text[]" }),
    __metadata("design:type", Array)
], Application.prototype, "whyUs", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)("text", { default: "" }),
    __metadata("design:type", String)
], Application.prototype, "howHear", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)("text", { default: "" }),
    __metadata("design:type", String)
], Application.prototype, "team", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)("text", { default: "" }),
    __metadata("design:type", String)
], Application.prototype, "linkedIn", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)("text", { default: "" }),
    __metadata("design:type", String)
], Application.prototype, "dietaryRestrictions", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)("text", { default: "" }),
    __metadata("design:type", String)
], Application.prototype, "transportation", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)("text", { default: "" }),
    __metadata("design:type", String)
], Application.prototype, "other", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Application.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Application.prototype, "updatedAt", void 0);
Application = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Application);
exports.Application = Application;
//# sourceMappingURL=Application.js.map