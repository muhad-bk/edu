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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PermissionListRelationFilter } from "../../permission/base/PermissionListRelationFilter";
import { SchoolDistrictListRelationFilter } from "../../schoolDistrict/base/SchoolDistrictListRelationFilter";
import { SchoolListRelationFilter } from "../../school/base/SchoolListRelationFilter";
import { StafListRelationFilter } from "../../staf/base/StafListRelationFilter";

@InputType()
class RoleWhereInput {
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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => PermissionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PermissionListRelationFilter)
  @IsOptional()
  @Field(() => PermissionListRelationFilter, {
    nullable: true,
  })
  permissions?: PermissionListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SchoolDistrictListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SchoolDistrictListRelationFilter)
  @IsOptional()
  @Field(() => SchoolDistrictListRelationFilter, {
    nullable: true,
  })
  schoolDistricts?: SchoolDistrictListRelationFilter;

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
    type: () => StafListRelationFilter,
  })
  @ValidateNested()
  @Type(() => StafListRelationFilter)
  @IsOptional()
  @Field(() => StafListRelationFilter, {
    nullable: true,
  })
  stafs?: StafListRelationFilter;
}

export { RoleWhereInput };
