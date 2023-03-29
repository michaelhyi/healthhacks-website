"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Initial1680081349390 = void 0;
class Initial1680081349390 {
    constructor() {
        this.name = 'Initial1680081349390';
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
exports.Initial1680081349390 = Initial1680081349390;
//# sourceMappingURL=1680081349390-Initial.js.map