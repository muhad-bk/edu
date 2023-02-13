import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StafService } from "./staf.service";
import { StafControllerBase } from "./base/staf.controller.base";

@swagger.ApiTags("stafs")
@common.Controller("stafs")
export class StafController extends StafControllerBase {
  constructor(
    protected readonly service: StafService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
