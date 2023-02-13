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
import { SchoolWhereInput } from "./SchoolWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SchoolListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SchoolWhereInput,
  })
  @ValidateNested()
  @Type(() => SchoolWhereInput)
  @IsOptional()
  @Field(() => SchoolWhereInput, {
    nullable: true,
  })
  every?: SchoolWhereInput;

  @ApiProperty({
    required: false,
    type: () => SchoolWhereInput,
  })
  @ValidateNested()
  @Type(() => SchoolWhereInput)
  @IsOptional()
  @Field(() => SchoolWhereInput, {
    nullable: true,
  })
  some?: SchoolWhereInput;

  @ApiProperty({
    required: false,
    type: () => SchoolWhereInput,
  })
  @ValidateNested()
  @Type(() => SchoolWhereInput)
  @IsOptional()
  @Field(() => SchoolWhereInput, {
    nullable: true,
  })
  none?: SchoolWhereInput;
}
export { SchoolListRelationFilter };