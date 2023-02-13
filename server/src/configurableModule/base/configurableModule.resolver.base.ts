/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateConfigurableModuleArgs } from "./CreateConfigurableModuleArgs";
import { UpdateConfigurableModuleArgs } from "./UpdateConfigurableModuleArgs";
import { DeleteConfigurableModuleArgs } from "./DeleteConfigurableModuleArgs";
import { ConfigurableModuleFindManyArgs } from "./ConfigurableModuleFindManyArgs";
import { ConfigurableModuleFindUniqueArgs } from "./ConfigurableModuleFindUniqueArgs";
import { ConfigurableModule } from "./ConfigurableModule";
import { SubscriptionFindManyArgs } from "../../subscription/base/SubscriptionFindManyArgs";
import { Subscription } from "../../subscription/base/Subscription";
import { ConfigurableModuleService } from "../configurableModule.service";

@graphql.Resolver(() => ConfigurableModule)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ConfigurableModuleResolverBase {
  constructor(
    protected readonly service: ConfigurableModuleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ConfigurableModule",
    action: "read",
    possession: "any",
  })
  async _configurableModulesMeta(
    @graphql.Args() args: ConfigurableModuleFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ConfigurableModule])
  @nestAccessControl.UseRoles({
    resource: "ConfigurableModule",
    action: "read",
    possession: "any",
  })
  async configurableModules(
    @graphql.Args() args: ConfigurableModuleFindManyArgs
  ): Promise<ConfigurableModule[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ConfigurableModule, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ConfigurableModule",
    action: "read",
    possession: "own",
  })
  async configurableModule(
    @graphql.Args() args: ConfigurableModuleFindUniqueArgs
  ): Promise<ConfigurableModule | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ConfigurableModule)
  @nestAccessControl.UseRoles({
    resource: "ConfigurableModule",
    action: "create",
    possession: "any",
  })
  async createConfigurableModule(
    @graphql.Args() args: CreateConfigurableModuleArgs
  ): Promise<ConfigurableModule> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ConfigurableModule)
  @nestAccessControl.UseRoles({
    resource: "ConfigurableModule",
    action: "update",
    possession: "any",
  })
  async updateConfigurableModule(
    @graphql.Args() args: UpdateConfigurableModuleArgs
  ): Promise<ConfigurableModule | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ConfigurableModule)
  @nestAccessControl.UseRoles({
    resource: "ConfigurableModule",
    action: "delete",
    possession: "any",
  })
  async deleteConfigurableModule(
    @graphql.Args() args: DeleteConfigurableModuleArgs
  ): Promise<ConfigurableModule | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Subscription])
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "read",
    possession: "any",
  })
  async subscriptionsConfigModules(
    @graphql.Parent() parent: ConfigurableModule,
    @graphql.Args() args: SubscriptionFindManyArgs
  ): Promise<Subscription[]> {
    const results = await this.service.findSubscriptionsConfigModules(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }
}
