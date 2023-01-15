import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SchoolDistrictResolverBase } from "./base/schoolDistrict.resolver.base";
import { SchoolDistrict } from "./base/SchoolDistrict";
import { SchoolDistrictService } from "./schoolDistrict.service";

@graphql.Resolver(() => SchoolDistrict)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SchoolDistrictResolver extends SchoolDistrictResolverBase {
  constructor(
    protected readonly service: SchoolDistrictService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
