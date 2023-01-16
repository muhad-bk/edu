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
import { RecordWhereInput } from "./RecordWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RecordListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RecordWhereInput,
  })
  @ValidateNested()
  @Type(() => RecordWhereInput)
  @IsOptional()
  @Field(() => RecordWhereInput, {
    nullable: true,
  })
  every?: RecordWhereInput;

  @ApiProperty({
    required: false,
    type: () => RecordWhereInput,
  })
  @ValidateNested()
  @Type(() => RecordWhereInput)
  @IsOptional()
  @Field(() => RecordWhereInput, {
    nullable: true,
  })
  some?: RecordWhereInput;

  @ApiProperty({
    required: false,
    type: () => RecordWhereInput,
  })
  @ValidateNested()
  @Type(() => RecordWhereInput)
  @IsOptional()
  @Field(() => RecordWhereInput, {
    nullable: true,
  })
  none?: RecordWhereInput;
}
export { RecordListRelationFilter };
