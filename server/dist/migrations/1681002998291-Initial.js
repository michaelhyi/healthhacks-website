"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Initial1681002998291 = void 0;
class Initial1681002998291 {
    constructor() {
        this.name = "Initial1681002998291";
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS  "application" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "status" text NOT NULL DEFAULT 'pending', "phone" text NOT NULL DEFAULT '', "organization" text NOT NULL DEFAULT '', "city" text NOT NULL DEFAULT '', "state" text NOT NULL DEFAULT '', "inPerson" text NOT NULL DEFAULT '', "wholeEvent" text NOT NULL DEFAULT '', "background" text array NOT NULL DEFAULT '[]', "whyUs" text array NOT NULL DEFAULT '[]', "howHear" text NOT NULL DEFAULT '', "team" text NOT NULL DEFAULT '', "linkedIn" text NOT NULL DEFAULT '', "dietaryRestrictions" text NOT NULL DEFAULT '', "transportation" text NOT NULL DEFAULT '', "other" text NOT NULL DEFAULT '', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_b4ae3fea4a24b4be1a86dacf8a2" UNIQUE ("userId"), CONSTRAINT "PK_569e0c3e863ebdf5f2408ee1670" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "verified" boolean NOT NULL DEFAULT false, "verifyToken" character varying, "verifyExpiration" character varying, "forgotPasswordToken" character varying, "forgotPasswordExpiration" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "application"`);
    }
}
exports.Initial1681002998291 = Initial1681002998291;
//# sourceMappingURL=1681002998291-Initial.js.map