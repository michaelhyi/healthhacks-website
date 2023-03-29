"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Initial1680132374899 = void 0;
class Initial1680132374899 {
    constructor() {
        this.name = 'Initial1680132374899';
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
exports.Initial1680132374899 = Initial1680132374899;
//# sourceMappingURL=1680132374899-Initial.js.map