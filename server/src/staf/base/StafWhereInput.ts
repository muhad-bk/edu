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
import { ChartVistListRelationFilter } from "../../chartVist/base/ChartVistListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { SchoolListRelationFilter } from "../../school/base/SchoolListRelationFilter";
import { SchoolDistrictWhereUniqueInput } from "../../schoolDistrict/base/SchoolDistrictWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class StafWhereInput {
  @ApiProperty({
    required: false,
    type: () => ChartVistListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ChartVistListRelationFilter)
  @IsOptional()
  @Field(() => ChartVistListRelationFilter, {
    nullable: true,
  })
  chartVists?: ChartVistListRelationFilter;

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
    type: () => SchoolListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SchoolListRelationFilter)
  @IsOptional()
  @Field(() => SchoolListRelationFilter, {
    nullable: true,
  })
  school?: SchoolListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SchoolDistrictWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SchoolDistrictWhereUniqueInput)
  @IsOptional()
  @Field(() => SchoolDistrictWhereUniqueInput, {
    nullable: true,
  })
  schoolDistricts?: SchoolDistrictWhereUniqueInput;

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

export { StafWhereInput };
