import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Field()
  @Column()
  firstName!: string;

  @Field()
  @Column()
  lastName!: string;

  @Field()
  @Column("boolean", { default: false })
  verified: boolean = false;

  @Field()
  @Column({ nullable: true })
  verifyToken: string;

  @Field()
  @Column({ nullable: true })
  verifyExpiration: string;

  @Field()
  @Column({ nullable: true })
  forgotPasswordToken: string;

  @Field()
  @Column({ nullable: true })
  forgotPasswordExpiration: string;

  @Field()
  @Column("text", { default: "pending", nullable: true })
  status: string = "pending";

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
