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
import { IsString, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { ChartVistUpdateManyWithoutStafsInput } from "./ChartVistUpdateManyWithoutStafsInput";
import { Type } from "class-transformer";
import { EnumStafGender } from "./EnumStafGender";
import { RoleWhereUniqueInput } from "../../role/base/RoleWhereUniqueInput";
import { SchoolUpdateManyWithoutStafsInput } from "./SchoolUpdateManyWithoutStafsInput";
import { SchoolDistrictWhereUniqueInput } from "../../schoolDistrict/base/SchoolDistrictWhereUniqueInput";
import { EnumStafStatus } from "./EnumStafStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class StafUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: () => ChartVistUpdateManyWithoutStafsInput,
  })
  @ValidateNested()
  @Type(() => ChartVistUpdateManyWithoutStafsInput)
  @IsOptional()
  @Field(() => ChartVistUpdateManyWithoutStafsInput, {
    nullable: true,
  })
  chartVists?: ChartVistUpdateManyWithoutStafsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  contactDetails?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  destignation?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fullName?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumStafGender,
  })
  @IsEnum(EnumStafGender)
  @IsOptional()
  @Field(() => EnumStafGender, {
    nullable: true,
  })
  gender?: "Male" | "Female" | "NotSpecified" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  idNumber?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  officialEmail?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  race?: string | null;

  @ApiProperty({
    required: false,
    type: () => RoleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RoleWhereUniqueInput)
  @IsOptional()
  @Field(() => RoleWhereUniqueInput, {
    nullable: true,
  })
  role?: RoleWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SchoolUpdateManyWithoutStafsInput,
  })
  @ValidateNested()
  @Type(() => SchoolUpdateManyWithoutStafsInput)
  @IsOptional()
  @Field(() => SchoolUpdateManyWithoutStafsInput, {
    nullable: true,
  })
  school?: SchoolUpdateManyWithoutStafsInput;

  @ApiProperty({
    required: false,
    type: () => SchoolDistrictWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SchoolDistrictWhereUniqueInput)
  @IsOptional()
  @Field(() => SchoolDistrictWhereUniqueInput, {
    nullable: true,
  })
  schoolDistricts?: SchoolDistrictWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumStafStatus,
  })
  @IsEnum(EnumStafStatus)
  @IsOptional()
  @Field(() => EnumStafStatus, {
    nullable: true,
  })
  status?: "Active" | "Deactivate" | "Pending" | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}

export { StafUpdateInput };
