import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ChartVistService } from "./chartVist.service";
import { ChartVistControllerBase } from "./base/chartVist.controller.base";

@swagger.ApiTags("chartVists")
@common.Controller("chartVists")
export class ChartVistController extends ChartVistControllerBase {
  constructor(
    protected readonly service: ChartVistService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
