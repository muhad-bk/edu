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
import { Subscription } from "../../subscription/base/Subscription";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Role } from "../../role/base/Role";
import { EnumSchoolSchoolDistrict } from "./EnumSchoolSchoolDistrict";
import { Staf } from "../../staf/base/Staf";
import { EnumSchoolState } from "./EnumSchoolState";
import { EnumSchoolTownship } from "./EnumSchoolTownship";

@ObjectType()
class School {
  @ApiProperty({
    required: false,
    type: () => Subscription,
  })
  @ValidateNested()
  @Type(() => Subscription)
  @IsOptional()
  activeSuscription?: Subscription | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Role],
  })
  @ValidateNested()
  @Type(() => Role)
  @IsOptional()
  roles?: Array<Role>;

  @ApiProperty({
    required: false,
    enum: EnumSchoolSchoolDistrict,
  })
  @IsEnum(EnumSchoolSchoolDistrict)
  @IsOptional()
  @Field(() => EnumSchoolSchoolDistrict, {
    nullable: true,
  })
  schoolDistrict?: "A" | null;

  @ApiProperty({
    required: false,
    type: () => [Staf],
  })
  @ValidateNested()
  @Type(() => Staf)
  @IsOptional()
  stafs?: Array<Staf>;

  @ApiProperty({
    required: true,
    enum: EnumSchoolState,
  })
  @IsEnum(EnumSchoolState)
  @Field(() => EnumSchoolState, {
    nullable: true,
  })
  state?: "Sate_1" | "State_2";

  @ApiProperty({
    required: false,
    type: () => [Subscription],
  })
  @ValidateNested()
  @Type(() => Subscription)
  @IsOptional()
  SubscriptionHistory?: Array<Subscription>;

  @ApiProperty({
    required: true,
    enum: EnumSchoolTownship,
  })
  @IsEnum(EnumSchoolTownship)
  @Field(() => EnumSchoolTownship, {
    nullable: true,
  })
  township?: "T1" | "T2";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { School };
