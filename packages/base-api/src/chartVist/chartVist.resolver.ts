import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ChartVistResolverBase } from "./base/chartVist.resolver.base";
import { ChartVist } from "./base/ChartVist";
import { ChartVistService } from "./chartVist.service";

@graphql.Resolver(() => ChartVist)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ChartVistResolver extends ChartVistResolverBase {
  constructor(
    protected readonly service: ChartVistService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
