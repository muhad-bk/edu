import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RecordService } from "./record.service";
import { RecordControllerBase } from "./base/record.controller.base";

@swagger.ApiTags("records")
@common.Controller("records")
export class RecordController extends RecordControllerBase {
  constructor(
    protected readonly service: RecordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
