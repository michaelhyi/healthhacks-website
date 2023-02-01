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
  @Column()
  status!: string;

  @Field()
  @Column()
  firstName!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  middleName: string;

  @Field()
  @Column()
  lastName!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  phone: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  organization: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  city: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  state: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  inPerson: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  wholeEvent: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  background: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  whyUs: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  trackRanking: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  howHear: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  team: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  linkedin: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  contact: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  dietaryRestrictions: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  other: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
