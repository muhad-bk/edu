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
import {
  IsNumber,
  IsOptional,
  ValidateNested,
  IsBoolean,
  IsString,
  IsEnum,
} from "class-validator";
import { ConfigurableModuleUpdateManyWithoutSubscriptionsInput } from "./ConfigurableModuleUpdateManyWithoutSubscriptionsInput";
import { Type } from "class-transformer";
import { EnumSubscriptionPeriod } from "./EnumSubscriptionPeriod";
import { SchoolDistrictUpdateManyWithoutSubscriptionsInput } from "./SchoolDistrictUpdateManyWithoutSubscriptionsInput";
import { SubscriptionPlanUpdateManyWithoutSubscriptionsInput } from "./SubscriptionPlanUpdateManyWithoutSubscriptionsInput";

@InputType()
class SubscriptionUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number;

  @ApiProperty({
    required: false,
    type: () => ConfigurableModuleUpdateManyWithoutSubscriptionsInput,
  })
  @ValidateNested()
  @Type(() => ConfigurableModuleUpdateManyWithoutSubscriptionsInput)
  @IsOptional()
  @Field(() => ConfigurableModuleUpdateManyWithoutSubscriptionsInput, {
    nullable: true,
  })
  configurableModules?: ConfigurableModuleUpdateManyWithoutSubscriptionsInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isStanderd?: boolean;

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
    enum: EnumSubscriptionPeriod,
  })
  @IsEnum(EnumSubscriptionPeriod)
  @IsOptional()
  @Field(() => EnumSubscriptionPeriod, {
    nullable: true,
  })
  period?: "Monthly" | "Yearly" | null;

  @ApiProperty({
    required: false,
    type: () => SchoolDistrictUpdateManyWithoutSubscriptionsInput,
  })
  @ValidateNested()
  @Type(() => SchoolDistrictUpdateManyWithoutSubscriptionsInput)
  @IsOptional()
  @Field(() => SchoolDistrictUpdateManyWithoutSubscriptionsInput, {
    nullable: true,
  })
  schoolDistricts?: SchoolDistrictUpdateManyWithoutSubscriptionsInput;

  @ApiProperty({
    required: false,
    type: () => SubscriptionPlanUpdateManyWithoutSubscriptionsInput,
  })
  @ValidateNested()
  @Type(() => SubscriptionPlanUpdateManyWithoutSubscriptionsInput)
  @IsOptional()
  @Field(() => SubscriptionPlanUpdateManyWithoutSubscriptionsInput, {
    nullable: true,
  })
  subscriptionPlans?: SubscriptionPlanUpdateManyWithoutSubscriptionsInput;
}

export { SubscriptionUpdateInput };
