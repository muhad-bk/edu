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
import { ConfigurableModuleWhereInput } from "./ConfigurableModuleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ConfigurableModuleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ConfigurableModuleWhereInput,
  })
  @ValidateNested()
  @Type(() => ConfigurableModuleWhereInput)
  @IsOptional()
  @Field(() => ConfigurableModuleWhereInput, {
    nullable: true,
  })
  every?: ConfigurableModuleWhereInput;

  @ApiProperty({
    required: false,
    type: () => ConfigurableModuleWhereInput,
  })
  @ValidateNested()
  @Type(() => ConfigurableModuleWhereInput)
  @IsOptional()
  @Field(() => ConfigurableModuleWhereInput, {
    nullable: true,
  })
  some?: ConfigurableModuleWhereInput;

  @ApiProperty({
    required: false,
    type: () => ConfigurableModuleWhereInput,
  })
  @ValidateNested()
  @Type(() => ConfigurableModuleWhereInput)
  @IsOptional()
  @Field(() => ConfigurableModuleWhereInput, {
    nullable: true,
  })
  none?: ConfigurableModuleWhereInput;
}
export { ConfigurableModuleListRelationFilter };
