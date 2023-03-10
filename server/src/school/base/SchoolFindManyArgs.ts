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
import { SchoolWhereInput } from "./SchoolWhereInput";
import { Type } from "class-transformer";
import { SchoolOrderByInput } from "./SchoolOrderByInput";

@ArgsType()
class SchoolFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SchoolWhereInput,
  })
  @Field(() => SchoolWhereInput, { nullable: true })
  @Type(() => SchoolWhereInput)
  where?: SchoolWhereInput;

  @ApiProperty({
    required: false,
    type: [SchoolOrderByInput],
  })
  @Field(() => [SchoolOrderByInput], { nullable: true })
  @Type(() => SchoolOrderByInput)
  orderBy?: Array<SchoolOrderByInput>;

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

export { SchoolFindManyArgs };
