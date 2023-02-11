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
import { ParentListRelationFilter } from "../../parent/base/ParentListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MedicalRecordWhereUniqueInput } from "../../medicalRecord/base/MedicalRecordWhereUniqueInput";
import { StudentWhereUniqueInput } from "../../student/base/StudentWhereUniqueInput";

@InputType()
class ApprovalWhereInput {
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
  approvedBy?: ParentListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  authorisationLetter?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

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
    type: () => MedicalRecordWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MedicalRecordWhereUniqueInput)
  @IsOptional()
  @Field(() => MedicalRecordWhereUniqueInput, {
    nullable: true,
  })
  record?: MedicalRecordWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => StudentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StudentWhereUniqueInput)
  @IsOptional()
  @Field(() => StudentWhereUniqueInput, {
    nullable: true,
  })
  student?: StudentWhereUniqueInput;
}

export { ApprovalWhereInput };