/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SubscriptionWhereUniqueInput } from "../../subscription/base/SubscriptionWhereUniqueInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { RoleUpdateManyWithoutSchoolsInput } from "./RoleUpdateManyWithoutSchoolsInput";
import { EnumSchoolSchoolDistrict } from "./EnumSchoolSchoolDistrict";
import { StafUpdateManyWithoutSchoolsInput } from "./StafUpdateManyWithoutSchoolsInput";
import { EnumSchoolState } from "./EnumSchoolState";
import { StudentUpdateManyWithoutSchoolsInput } from "./StudentUpdateManyWithoutSchoolsInput";
import { SubscriptionUpdateManyWithoutSchoolsInput } from "./SubscriptionUpdateManyWithoutSchoolsInput";
import { EnumSchoolTownship } from "./EnumSchoolTownship";

@InputType()
class SchoolUpdateInput {
  @ApiProperty({
    required: false,
    type: () => SubscriptionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SubscriptionWhereUniqueInput)
  @IsOptional()
  @Field(() => SubscriptionWhereUniqueInput, {
    nullable: true,
  })
  activeSuscription?: SubscriptionWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => RoleUpdateManyWithoutSchoolsInput,
  })
  @ValidateNested()
  @Type(() => RoleUpdateManyWithoutSchoolsInput)
  @IsOptional()
  @Field(() => RoleUpdateManyWithoutSchoolsInput, {
    nullable: true,
  })
  roles?: RoleUpdateManyWithoutSchoolsInput;

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
    type: () => StafUpdateManyWithoutSchoolsInput,
  })
  @ValidateNested()
  @Type(() => StafUpdateManyWithoutSchoolsInput)
  @IsOptional()
  @Field(() => StafUpdateManyWithoutSchoolsInput, {
    nullable: true,
  })
  stafs?: StafUpdateManyWithoutSchoolsInput;

  @ApiProperty({
    required: false,
    enum: EnumSchoolState,
  })
  @IsEnum(EnumSchoolState)
  @IsOptional()
  @Field(() => EnumSchoolState, {
    nullable: true,
  })
  state?: "Sate_1" | "State_2";

  @ApiProperty({
    required: false,
    type: () => StudentUpdateManyWithoutSchoolsInput,
  })
  @ValidateNested()
  @Type(() => StudentUpdateManyWithoutSchoolsInput)
  @IsOptional()
  @Field(() => StudentUpdateManyWithoutSchoolsInput, {
    nullable: true,
  })
  students?: StudentUpdateManyWithoutSchoolsInput;

  @ApiProperty({
    required: false,
    type: () => SubscriptionUpdateManyWithoutSchoolsInput,
  })
  @ValidateNested()
  @Type(() => SubscriptionUpdateManyWithoutSchoolsInput)
  @IsOptional()
  @Field(() => SubscriptionUpdateManyWithoutSchoolsInput, {
    nullable: true,
  })
  SubscriptionHistory?: SubscriptionUpdateManyWithoutSchoolsInput;

  @ApiProperty({
    required: false,
    enum: EnumSchoolTownship,
  })
  @IsEnum(EnumSchoolTownship)
  @IsOptional()
  @Field(() => EnumSchoolTownship, {
    nullable: true,
  })
  township?: "T1" | "T2";
}

export { SchoolUpdateInput };
