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
import { ParentCreateNestedManyWithoutApprovalsInput } from "./ParentCreateNestedManyWithoutApprovalsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { MedicalRecordWhereUniqueInput } from "../../medicalRecord/base/MedicalRecordWhereUniqueInput";
import { StudentWhereUniqueInput } from "../../student/base/StudentWhereUniqueInput";

@InputType()
class ApprovalCreateInput {
  @ApiProperty({
    required: false,
    type: () => ParentCreateNestedManyWithoutApprovalsInput,
  })
  @ValidateNested()
  @Type(() => ParentCreateNestedManyWithoutApprovalsInput)
  @IsOptional()
  @Field(() => ParentCreateNestedManyWithoutApprovalsInput, {
    nullable: true,
  })
  approvedBy?: ParentCreateNestedManyWithoutApprovalsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  authorisationLetter?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: true,
    type: () => MedicalRecordWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MedicalRecordWhereUniqueInput)
  @Field(() => MedicalRecordWhereUniqueInput)
  record!: MedicalRecordWhereUniqueInput | null;

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
}

export { ApprovalCreateInput };