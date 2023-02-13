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
import { ChartVistWhereInput } from "./ChartVistWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ChartVistListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ChartVistWhereInput,
  })
  @ValidateNested()
  @Type(() => ChartVistWhereInput)
  @IsOptional()
  @Field(() => ChartVistWhereInput, {
    nullable: true,
  })
  every?: ChartVistWhereInput;

  @ApiProperty({
    required: false,
    type: () => ChartVistWhereInput,
  })
  @ValidateNested()
  @Type(() => ChartVistWhereInput)
  @IsOptional()
  @Field(() => ChartVistWhereInput, {
    nullable: true,
  })
  some?: ChartVistWhereInput;

  @ApiProperty({
    required: false,
    type: () => ChartVistWhereInput,
  })
  @ValidateNested()
  @Type(() => ChartVistWhereInput)
  @IsOptional()
  @Field(() => ChartVistWhereInput, {
    nullable: true,
  })
  none?: ChartVistWhereInput;
}
export { ChartVistListRelationFilter };
