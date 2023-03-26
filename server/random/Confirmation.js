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
exports.Confirmation = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
let Confirmation = class Confirmation extends typeorm_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.status = "pending";
        this.inPerson = "";
        this.tracks1 = "";
        this.tracks2 = "";
        this.liability = "";
        this.liabilityDate = "";
        this.other = "";
        this.paid = "";
    }
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Confirmation.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", Number)
], Confirmation.prototype, "userId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)("text", { default: "pending" }),
    __metadata("design:type", String)
], Confirmation.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)("text", { default: "" }),
    __metadata("design:type", String)
], Confirmation.prototype, "inPerson", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)("text", { default: "" }),
    __metadata("design:type", String)
], Confirmation.prototype, "tracks1", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)("text", { default: "" }),
    __metadata("design:type", String)
], Confirmation.prototype, "tracks2", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)("text", { default: "" }),
    __metadata("design:type", String)
], Confirmation.prototype, "liability", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)("text", { default: "" }),
    __metadata("design:type", String)
], Confirmation.prototype, "liabilityDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)("text", { default: "" }),
    __metadata("design:type", String)
], Confirmation.prototype, "other", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)("text", { default: "" }),
    __metadata("design:type", String)
], Confirmation.prototype, "paid", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Confirmation.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Confirmation.prototype, "updatedAt", void 0);
Confirmation = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Confirmation);
exports.Confirmation = Confirmation;
//# sourceMappingURL=Confirmation.js.map