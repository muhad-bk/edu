import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SchoolDistrictService } from "./schoolDistrict.service";
import { SchoolDistrictControllerBase } from "./base/schoolDistrict.controller.base";

@swagger.ApiTags("schoolDistricts")
@common.Controller("schoolDistricts")
export class SchoolDistrictController extends SchoolDistrictControllerBase {
  constructor(
    protected readonly service: SchoolDistrictService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
