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
import { ApprovalWhereUniqueInput } from "../../approval/base/ApprovalWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumTreatmentCategory } from "./EnumTreatmentCategory";
import { ChartVistWhereUniqueInput } from "../../chartVist/base/ChartVistWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../../student/base/StudentWhereUniqueInput";

@InputType()
class TreatmentWhereInput {
  @ApiProperty({
    required: false,
    type: () => ApprovalWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ApprovalWhereUniqueInput)
  @IsOptional()
  @Field(() => ApprovalWhereUniqueInput, {
    nullable: true,
  })
  approval?: ApprovalWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumTreatmentCategory,
  })
  @IsEnum(EnumTreatmentCategory)
  @IsOptional()
  @Field(() => EnumTreatmentCategory, {
    nullable: true,
  })
  category?: "Immunisation" | "Treatment" | "Medication" | "MandatoryScreening";

  @ApiProperty({
    required: false,
    type: () => ChartVistWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChartVistWhereUniqueInput)
  @IsOptional()
  @Field(() => ChartVistWhereUniqueInput, {
    nullable: true,
  })
  chartVist?: ChartVistWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  generalDetails?: JsonFilter;

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
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  medicationDetails?: JsonFilter;

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

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  timingDetails?: JsonFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  treatmentDetails?: JsonFilter;
}

export { TreatmentWhereInput };
