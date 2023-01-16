import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ApprovalResolverBase } from "./base/approval.resolver.base";
import { Approval } from "./base/Approval";
import { ApprovalService } from "./approval.service";

@graphql.Resolver(() => Approval)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ApprovalResolver extends ApprovalResolverBase {
  constructor(
    protected readonly service: ApprovalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
