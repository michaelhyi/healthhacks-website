import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1680132374899 implements MigrationInterface {
    name = 'Initial1680132374899'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "application" ALTER COLUMN "background" SET DEFAULT ARRAY[]::text[]`);
        await queryRunner.query(`ALTER TABLE "application" ALTER COLUMN "whyUs" SET DEFAULT ARRAY[]::text[]`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "application" ALTER COLUMN "whyUs" SET DEFAULT ARRAY[]`);
        await queryRunner.query(`ALTER TABLE "application" ALTER COLUMN "background" SET DEFAULT ARRAY[]`);
    }

}
