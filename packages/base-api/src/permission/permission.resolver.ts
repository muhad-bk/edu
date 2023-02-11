import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PermissionResolverBase } from "./base/permission.resolver.base";
import { Permission } from "./base/Permission";
import { PermissionService } from "./permission.service";

@graphql.Resolver(() => Permission)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PermissionResolver extends PermissionResolverBase {
  constructor(
    protected readonly service: PermissionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
