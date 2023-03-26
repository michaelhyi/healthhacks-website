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
export class Confirmation extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ unique: true })
  userId!: number;

  @Field()
  @Column("text", { default: "pending" })
  status: string = "pending";

  @Field()
  @Column("text", { default: "" })
  inPerson: string = "";

  @Field()
  @Column("text", { default: "" })
  tracks1: string = "";

  @Field()
  @Column("text", { default: "" })
  tracks2: string = "";

  @Field()
  @Column("text", { default: "" })
  liability: string = "";

  @Field()
  @Column("text", { default: "" })
  liabilityDate: string = "";

  @Field()
  @Column("text", { default: "" })
  other: string = "";

  @Field()
  @Column("text", { default: "" })
  paid: string = "";

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
