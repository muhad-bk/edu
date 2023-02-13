import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApprovalService } from "./approval.service";
import { ApprovalControllerBase } from "./base/approval.controller.base";

@swagger.ApiTags("approvals")
@common.Controller("approvals")
export class ApprovalController extends ApprovalControllerBase {
  constructor(
    protected readonly service: ApprovalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
