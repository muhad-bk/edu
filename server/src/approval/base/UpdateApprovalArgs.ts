/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApprovalWhereUniqueInput } from "./ApprovalWhereUniqueInput";
import { ApprovalUpdateInput } from "./ApprovalUpdateInput";

@ArgsType()
class UpdateApprovalArgs {
  @Field(() => ApprovalWhereUniqueInput, { nullable: false })
  where!: ApprovalWhereUniqueInput;
  @Field(() => ApprovalUpdateInput, { nullable: false })
  data!: ApprovalUpdateInput;
}

export { UpdateApprovalArgs };
