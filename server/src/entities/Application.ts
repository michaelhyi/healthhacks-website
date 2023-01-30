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
  @Column()
  middleName: string;

  @Field()
  @Column()
  lastName!: string;

  @Field({ nullable: true })
  @Column()
  phone: string;

  @Field({ nullable: true })
  @Column()
  organization: string;

  @Field({ nullable: true })
  @Column()
  city: string;

  @Field({ nullable: true })
  @Column()
  state: string;

  @Field({ nullable: true })
  @Column()
  inPerson: boolean;

  @Field({ nullable: true })
  @Column()
  wholeEvent: boolean;

  @Field({ nullable: true })
  @Column()
  background: string;

  @Field({ nullable: true })
  @Column()
  whyUs: string;

  @Field({ nullable: true })
  @Column()
  trackRanking: string;

  @Field({ nullable: true })
  @Column()
  howHear: string;

  @Field({ nullable: true })
  @Column()
  team: boolean;

  @Field({ nullable: true })
  @Column()
  linkedin: string;

  @Field({ nullable: true })
  @Column()
  contact: string;

  @Field({ nullable: true })
  @Column()
  dietaryRestrictions: string;

  @Field({ nullable: true })
  @Column()
  other: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
