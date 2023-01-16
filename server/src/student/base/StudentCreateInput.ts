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
import { RecordCreateNestedManyWithoutStudentsInput } from "./RecordCreateNestedManyWithoutStudentsInput";
import { Type } from "class-transformer";
import { SchoolWhereUniqueInput } from "../../school/base/SchoolWhereUniqueInput";

@InputType()
class StudentCreateInput {
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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => RecordCreateNestedManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => RecordCreateNestedManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => RecordCreateNestedManyWithoutStudentsInput, {
    nullable: true,
  })
  records?: RecordCreateNestedManyWithoutStudentsInput;

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

export { StudentCreateInput };
