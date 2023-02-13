import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ConfigurableModuleResolverBase } from "./base/configurableModule.resolver.base";
import { ConfigurableModule } from "./base/ConfigurableModule";
import { ConfigurableModuleService } from "./configurableModule.service";

@graphql.Resolver(() => ConfigurableModule)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ConfigurableModuleResolver extends ConfigurableModuleResolverBase {
  constructor(
    protected readonly service: ConfigurableModuleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
