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
import { SubscriptionUpdateManyWithoutConfigurableModulesInput } from "./SubscriptionUpdateManyWithoutConfigurableModulesInput";
import { Type } from "class-transformer";

@InputType()
class ConfigurableModuleUpdateInput {
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
    type: () => SubscriptionUpdateManyWithoutConfigurableModulesInput,
  })
  @ValidateNested()
  @Type(() => SubscriptionUpdateManyWithoutConfigurableModulesInput)
  @IsOptional()
  @Field(() => SubscriptionUpdateManyWithoutConfigurableModulesInput, {
    nullable: true,
  })
  subscriptionsConfigModules?: SubscriptionUpdateManyWithoutConfigurableModulesInput;
}

export { ConfigurableModuleUpdateInput };
