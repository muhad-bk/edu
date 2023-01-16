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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { SchoolListRelationFilter } from "../../school/base/SchoolListRelationFilter";
import { StudentListRelationFilter } from "../../student/base/StudentListRelationFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class ParentWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => SchoolListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SchoolListRelationFilter)
  @IsOptional()
  @Field(() => SchoolListRelationFilter, {
    nullable: true,
  })
  schools?: SchoolListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => StudentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => StudentListRelationFilter)
  @IsOptional()
  @Field(() => StudentListRelationFilter, {
    nullable: true,
  })
  students?: StudentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}

export { ParentWhereInput };