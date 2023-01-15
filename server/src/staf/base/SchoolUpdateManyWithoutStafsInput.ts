/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SchoolWhereUniqueInput } from "../../school/base/SchoolWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SchoolUpdateManyWithoutStafsInput {
  @Field(() => [SchoolWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SchoolWhereUniqueInput],
  })
  connect?: Array<SchoolWhereUniqueInput>;

  @Field(() => [SchoolWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SchoolWhereUniqueInput],
  })
  disconnect?: Array<SchoolWhereUniqueInput>;

  @Field(() => [SchoolWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SchoolWhereUniqueInput],
  })
  set?: Array<SchoolWhereUniqueInput>;
}

export { SchoolUpdateManyWithoutStafsInput };
