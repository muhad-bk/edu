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
import { ValidateNested, IsOptional, IsEnum, IsJSON } from "class-validator";
import { Type } from "class-transformer";
import { EnumMedicalRecordCategory } from "./EnumMedicalRecordCategory";
import { ChartVistWhereUniqueInput } from "../../chartVist/base/ChartVistWhereUniqueInput";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { StudentWhereUniqueInput } from "../../student/base/StudentWhereUniqueInput";

@InputType()
class MedicalRecordCreateInput {
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
  approval?: ApprovalWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumMedicalRecordCategory,
  })
  @IsEnum(EnumMedicalRecordCategory)
  @IsOptional()
  @Field(() => EnumMedicalRecordCategory, {
    nullable: true,
  })
  category?:
    | "Immunisation"
    | "Treatment"
    | "Medication"
    | "MandatoryScreening"
    | null;

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
  chartVist?: ChartVistWhereUniqueInput | null;

  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSON)
  generalDetails!: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  medicationDetails?: InputJsonValue;

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
  student?: StudentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  timingDetails?: InputJsonValue;

  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSON)
  treatmentDetails!: InputJsonValue;
}

export { MedicalRecordCreateInput };
