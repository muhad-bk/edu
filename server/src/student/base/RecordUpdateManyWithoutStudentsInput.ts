/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { RecordWhereUniqueInput } from "../../record/base/RecordWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RecordUpdateManyWithoutStudentsInput {
  @Field(() => [RecordWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RecordWhereUniqueInput],
  })
  connect?: Array<RecordWhereUniqueInput>;

  @Field(() => [RecordWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RecordWhereUniqueInput],
  })
  disconnect?: Array<RecordWhereUniqueInput>;

  @Field(() => [RecordWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RecordWhereUniqueInput],
  })
  set?: Array<RecordWhereUniqueInput>;
}

export { RecordUpdateManyWithoutStudentsInput };
