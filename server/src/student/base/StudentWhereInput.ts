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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { ApprovalListRelationFilter } from "../../approval/base/ApprovalListRelationFilter";
import { ChartVistListRelationFilter } from "../../chartVist/base/ChartVistListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParentListRelationFilter } from "../../parent/base/ParentListRelationFilter";
import { TreatmentListRelationFilter } from "../../treatment/base/TreatmentListRelationFilter";
import { SchoolWhereUniqueInput } from "../../school/base/SchoolWhereUniqueInput";
import { EnumStudentStatus } from "./EnumStudentStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class StudentWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  address?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ApprovalListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ApprovalListRelationFilter)
  @IsOptional()
  @Field(() => ApprovalListRelationFilter, {
    nullable: true,
  })
  approvals?: ApprovalListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ChartVistListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ChartVistListRelationFilter)
  @IsOptional()
  @Field(() => ChartVistListRelationFilter, {
    nullable: true,
  })
  chartVists?: ChartVistListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ParentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ParentListRelationFilter)
  @IsOptional()
  @Field(() => ParentListRelationFilter, {
    nullable: true,
  })
  parent?: ParentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => TreatmentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TreatmentListRelationFilter)
  @IsOptional()
  @Field(() => TreatmentListRelationFilter, {
    nullable: true,
  })
  records?: TreatmentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SchoolWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SchoolWhereUniqueInput)
  @IsOptional()
  @Field(() => SchoolWhereUniqueInput, {
    nullable: true,
  })
  school?: SchoolWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumStudentStatus,
  })
  @IsEnum(EnumStudentStatus)
  @IsOptional()
  @Field(() => EnumStudentStatus, {
    nullable: true,
  })
  status?: "Active" | "Deactivate" | "Pending";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  studentId?: StringNullableFilter;

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

export { StudentWhereInput };
