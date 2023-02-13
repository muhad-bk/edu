import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ConfigurableModuleService } from "./configurableModule.service";
import { ConfigurableModuleControllerBase } from "./base/configurableModule.controller.base";

@swagger.ApiTags("configurableModules")
@common.Controller("configurableModules")
export class ConfigurableModuleController extends ConfigurableModuleControllerBase {
  constructor(
    protected readonly service: ConfigurableModuleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
