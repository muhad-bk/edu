/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsJSON,
  IsDate,
  IsEnum,
} from "class-validator";
import { Approval } from "../../approval/base/Approval";
import { Type } from "class-transformer";
import { ChartVist } from "../../chartVist/base/ChartVist";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Parent } from "../../parent/base/Parent";
import { Treatment } from "../../treatment/base/Treatment";
import { School } from "../../school/base/School";
import { EnumStudentStatus } from "./EnumStudentStatus";
import { User } from "../../user/base/User";

@ObjectType()
class Student {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Approval],
  })
  @ValidateNested()
  @Type(() => Approval)
  @IsOptional()
  approvals?: Array<Approval>;

  @ApiProperty({
    required: false,
    type: () => [ChartVist],
  })
  @ValidateNested()
  @Type(() => ChartVist)
  @IsOptional()
  chartVists?: Array<ChartVist>;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  contactDetails!: JsonValue;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  generalDetails!: JsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => [Parent],
  })
  @ValidateNested()
  @Type(() => Parent)
  @IsOptional()
  parent?: Array<Parent>;

  @ApiProperty({
    required: false,
    type: () => [Treatment],
  })
  @ValidateNested()
  @Type(() => Treatment)
  @IsOptional()
  records?: Array<Treatment>;

  @ApiProperty({
    required: true,
    type: () => School,
  })
  @ValidateNested()
  @Type(() => School)
  school?: School;

  @ApiProperty({
    required: false,
    enum: EnumStudentStatus,
  })
  @IsEnum(EnumStudentStatus)
  @IsOptional()
  @Field(() => EnumStudentStatus, {
    nullable: true,
  })
  status?: "Active" | "Deactivate" | "Pending" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  studentId!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  user?: User;
}

export { Student };
