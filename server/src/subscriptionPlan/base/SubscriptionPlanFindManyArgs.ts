/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SubscriptionPlanWhereInput } from "./SubscriptionPlanWhereInput";
import { Type } from "class-transformer";
import { SubscriptionPlanOrderByInput } from "./SubscriptionPlanOrderByInput";

@ArgsType()
class SubscriptionPlanFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SubscriptionPlanWhereInput,
  })
  @Field(() => SubscriptionPlanWhereInput, { nullable: true })
  @Type(() => SubscriptionPlanWhereInput)
  where?: SubscriptionPlanWhereInput;

  @ApiProperty({
    required: false,
    type: [SubscriptionPlanOrderByInput],
  })
  @Field(() => [SubscriptionPlanOrderByInput], { nullable: true })
  @Type(() => SubscriptionPlanOrderByInput)
  orderBy?: Array<SubscriptionPlanOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SubscriptionPlanFindManyArgs };