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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { RecordUpdateManyWithoutStudentsInput } from "./RecordUpdateManyWithoutStudentsInput";
import { Type } from "class-transformer";
import { SchoolWhereUniqueInput } from "../../school/base/SchoolWhereUniqueInput";

@InputType()
class StudentUpdateInput {
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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => RecordUpdateManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => RecordUpdateManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => RecordUpdateManyWithoutStudentsInput, {
    nullable: true,
  })
  records?: RecordUpdateManyWithoutStudentsInput;

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
  school?: SchoolWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  studentId?: string | null;
}

export { StudentUpdateInput };
