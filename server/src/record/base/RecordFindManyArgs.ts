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
import { RecordWhereInput } from "./RecordWhereInput";
import { Type } from "class-transformer";
import { RecordOrderByInput } from "./RecordOrderByInput";

@ArgsType()
class RecordFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RecordWhereInput,
  })
  @Field(() => RecordWhereInput, { nullable: true })
  @Type(() => RecordWhereInput)
  where?: RecordWhereInput;

  @ApiProperty({
    required: false,
    type: [RecordOrderByInput],
  })
  @Field(() => [RecordOrderByInput], { nullable: true })
  @Type(() => RecordOrderByInput)
  orderBy?: Array<RecordOrderByInput>;

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

export { RecordFindManyArgs };