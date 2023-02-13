import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SubscriptionPlanResolverBase } from "./base/subscriptionPlan.resolver.base";
import { SubscriptionPlan } from "./base/SubscriptionPlan";
import { SubscriptionPlanService } from "./subscriptionPlan.service";

@graphql.Resolver(() => SubscriptionPlan)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SubscriptionPlanResolver extends SubscriptionPlanResolverBase {
  constructor(
    protected readonly service: SubscriptionPlanService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
