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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { ParentListRelationFilter } from "../../parent/base/ParentListRelationFilter";
import { RecordListRelationFilter } from "../../record/base/RecordListRelationFilter";
import { SchoolWhereUniqueInput } from "../../school/base/SchoolWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class StudentWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  address?: StringNullableFilter;

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
    type: () => ParentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ParentListRelationFilter)
  @IsOptional()
  @Field(() => ParentListRelationFilter, {
    nullable: true,
  })
  parent?: ParentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => RecordListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RecordListRelationFilter)
  @IsOptional()
  @Field(() => RecordListRelationFilter, {
    nullable: true,
  })
  records?: RecordListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SchoolWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SchoolWhereUniqueInput)
  @IsOptional()
  @Field(() => SchoolWhereUniqueInput, {
    nullable: true,
  })
  school?: SchoolWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  studentId?: StringNullableFilter;

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

export { StudentWhereInput };
