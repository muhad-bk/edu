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
import { EnumChartVistChartType } from "./EnumChartVistChartType";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { SchoolWhereUniqueInput } from "../../school/base/SchoolWhereUniqueInput";
import { StafWhereUniqueInput } from "../../staf/base/StafWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StudentWhereUniqueInput } from "../../student/base/StudentWhereUniqueInput";
import { TreatmentListRelationFilter } from "../../treatment/base/TreatmentListRelationFilter";

@InputType()
class ChartVistWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumChartVistChartType,
  })
  @IsEnum(EnumChartVistChartType)
  @IsOptional()
  @Field(() => EnumChartVistChartType, {
    nullable: true,
  })
  chartType?: "Type_1" | "Type_2";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  endTime?: StringNullableFilter;

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
    type: () => StafWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StafWhereUniqueInput)
  @IsOptional()
  @Field(() => StafWhereUniqueInput, {
    nullable: true,
  })
  staf?: StafWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  startTime?: DateTimeNullableFilter;

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
    type: () => TreatmentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TreatmentListRelationFilter)
  @IsOptional()
  @Field(() => TreatmentListRelationFilter, {
    nullable: true,
  })
  treatments?: TreatmentListRelationFilter;
}

export { ChartVistWhereInput };
