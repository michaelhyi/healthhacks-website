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
export class Application extends BaseEntity {
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
  phone: string = "";

  @Field()
  @Column("text", { default: "" })
  organization: string = "";

  @Field()
  @Column("text", { default: "" })
  city: string = "";

  @Field()
  @Column("text", { default: "" })
  state: string = "";

  @Field()
  @Column("text", { default: "" })
  inPerson: string = "";

  @Field()
  @Column("text", { default: "" })
  wholeEvent: string = "";

  @Field()
  @Column("text", { default: "" })
  background: string = "";

  @Field()
  @Column("text", { default: "" })
  whyUs: string = "";

  @Field()
  @Column("text", { default: "" })
  howHear: string = "";

  @Field()
  @Column("text", { default: "" })
  team: string = "";

  @Field()
  @Column("text", { default: "" })
  linkedIn: string = "";

  @Field()
  @Column("text", { default: "" })
  dietaryRestrictions: string = "";

  @Field()
  @Column("text", { default: "" })
  transportation: string = "";

  @Field()
  @Column("text", { default: "" })
  other: string = "";

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
