"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Initial1680081292250 = void 0;
class Initial1680081292250 {
    constructor() {
        this.name = 'Initial1680081292250';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "application" ALTER COLUMN "background" SET DEFAULT ARRAY[]::text[]`);
        await queryRunner.query(`ALTER TABLE "application" ALTER COLUMN "whyUs" SET DEFAULT ARRAY[]::text[]`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "application" ALTER COLUMN "whyUs" SET DEFAULT ARRAY[]`);
        await queryRunner.query(`ALTER TABLE "application" ALTER COLUMN "background" SET DEFAULT ARRAY[]`);
    }
}
exports.Initial1680081292250 = Initial1680081292250;
//# sourceMappingURL=1680081292250-Initial.js.map