"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Initial1680154358586 = void 0;
class Initial1680154358586 {
    constructor() {
        this.name = 'Initial1680154358586';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "application" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "status" text NOT NULL DEFAULT 'pending', "phone" text NOT NULL DEFAULT '', "organization" text NOT NULL DEFAULT '', "city" text NOT NULL DEFAULT '', "state" text NOT NULL DEFAULT '', "inPerson" text NOT NULL DEFAULT '', "wholeEvent" text NOT NULL DEFAULT '', "background" text array NOT NULL DEFAULT ARRAY[]::text[], "whyUs" text array NOT NULL DEFAULT ARRAY[]::text[], "howHear" text NOT NULL DEFAULT '', "team" text NOT NULL DEFAULT '', "linkedIn" text NOT NULL DEFAULT '', "dietaryRestrictions" text NOT NULL DEFAULT '', "transportation" text NOT NULL DEFAULT '', "other" text NOT NULL DEFAULT '', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_b4ae3fea4a24b4be1a86dacf8a2" UNIQUE ("userId"), CONSTRAINT "PK_569e0c3e863ebdf5f2408ee1670" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "verified" boolean NOT NULL DEFAULT false, "verifyToken" character varying, "verifyExpiration" character varying, "forgotPasswordToken" character varying, "forgotPasswordExpiration" character varying, "status" text DEFAULT 'pending', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "application"`);
    }
}
exports.Initial1680154358586 = Initial1680154358586;
//# sourceMappingURL=1680154358586-Initial.js.map