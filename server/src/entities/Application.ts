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
  status!: boolean;

  @Field()
  @Column()
  firstName!: string;

  @Field()
  @Column()
  middleName!: string;

  @Field()
  @Column()
  lastName!: string;

  @Field()
  @Column()
  phone!: string;

  @Field()
  @Column()
  organization!: string;

  @Field()
  @Column()
  city!: string;

  @Field()
  @Column()
  state!: string;

  @Field()
  @Column()
  inPerson!: boolean;

  @Field()
  @Column()
  wholeEvent!: boolean;

  @Field()
  @Column()
  background!: string;

  @Field()
  @Column()
  whyUs!: string;

  @Field()
  @Column()
  trackRanking!: string;

  @Field()
  @Column()
  howHear!: string;

  @Field()
  @Column()
  team!: boolean;

  @Field()
  @Column()
  linkedin!: string;

  @Field()
  @Column()
  contact!: string;

  @Field()
  @Column()
  dietaryRestrictions!: string;

  @Field()
  @Column()
  other!: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
