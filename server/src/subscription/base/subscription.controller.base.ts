/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SubscriptionService } from "../subscription.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SubscriptionCreateInput } from "./SubscriptionCreateInput";
import { SubscriptionWhereInput } from "./SubscriptionWhereInput";
import { SubscriptionWhereUniqueInput } from "./SubscriptionWhereUniqueInput";
import { SubscriptionFindManyArgs } from "./SubscriptionFindManyArgs";
import { SubscriptionUpdateInput } from "./SubscriptionUpdateInput";
import { Subscription } from "./Subscription";
import { ConfigurableModuleFindManyArgs } from "../../configurableModule/base/ConfigurableModuleFindManyArgs";
import { ConfigurableModule } from "../../configurableModule/base/ConfigurableModule";
import { ConfigurableModuleWhereUniqueInput } from "../../configurableModule/base/ConfigurableModuleWhereUniqueInput";
import { SchoolDistrictFindManyArgs } from "../../schoolDistrict/base/SchoolDistrictFindManyArgs";
import { SchoolDistrict } from "../../schoolDistrict/base/SchoolDistrict";
import { SchoolDistrictWhereUniqueInput } from "../../schoolDistrict/base/SchoolDistrictWhereUniqueInput";
import { SubscriptionPlanFindManyArgs } from "../../subscriptionPlan/base/SubscriptionPlanFindManyArgs";
import { SubscriptionPlan } from "../../subscriptionPlan/base/SubscriptionPlan";
import { SubscriptionPlanWhereUniqueInput } from "../../subscriptionPlan/base/SubscriptionPlanWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SubscriptionControllerBase {
  constructor(
    protected readonly service: SubscriptionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Subscription })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: SubscriptionCreateInput
  ): Promise<Subscription> {
    return await this.service.create({
      data: data,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        isStanderd: true,
        name: true,
        period: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Subscription] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(SubscriptionFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Subscription[]> {
    const args = plainToClass(SubscriptionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        isStanderd: true,
        name: true,
        period: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Subscription })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: SubscriptionWhereUniqueInput
  ): Promise<Subscription | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        isStanderd: true,
        name: true,
        period: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Subscription })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: SubscriptionWhereUniqueInput,
    @common.Body() data: SubscriptionUpdateInput
  ): Promise<Subscription | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          amount: true,
          createdAt: true,
          id: true,
          isStanderd: true,
          name: true,
          period: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Subscription })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: SubscriptionWhereUniqueInput
  ): Promise<Subscription | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          amount: true,
          createdAt: true,
          id: true,
          isStanderd: true,
          name: true,
          period: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ConfigurableModule",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/configurableModules")
  @ApiNestedQuery(ConfigurableModuleFindManyArgs)
  async findManyConfigurableModules(
    @common.Req() request: Request,
    @common.Param() params: SubscriptionWhereUniqueInput
  ): Promise<ConfigurableModule[]> {
    const query = plainToClass(ConfigurableModuleFindManyArgs, request.query);
    const results = await this.service.findConfigurableModules(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/configurableModules")
  async connectConfigurableModules(
    @common.Param() params: SubscriptionWhereUniqueInput,
    @common.Body() body: ConfigurableModuleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      configurableModules: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/configurableModules")
  async updateConfigurableModules(
    @common.Param() params: SubscriptionWhereUniqueInput,
    @common.Body() body: ConfigurableModuleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      configurableModules: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/configurableModules")
  async disconnectConfigurableModules(
    @common.Param() params: SubscriptionWhereUniqueInput,
    @common.Body() body: ConfigurableModuleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      configurableModules: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "SchoolDistrict",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/schoolDistricts")
  @ApiNestedQuery(SchoolDistrictFindManyArgs)
  async findManySchoolDistricts(
    @common.Req() request: Request,
    @common.Param() params: SubscriptionWhereUniqueInput
  ): Promise<SchoolDistrict[]> {
    const query = plainToClass(SchoolDistrictFindManyArgs, request.query);
    const results = await this.service.findSchoolDistricts(params.id, {
      ...query,
      select: {
        address: true,
        createdAt: true,
        id: true,
        name: true,

        subscription: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/schoolDistricts")
  async connectSchoolDistricts(
    @common.Param() params: SubscriptionWhereUniqueInput,
    @common.Body() body: SchoolDistrictWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schoolDistricts: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/schoolDistricts")
  async updateSchoolDistricts(
    @common.Param() params: SubscriptionWhereUniqueInput,
    @common.Body() body: SchoolDistrictWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schoolDistricts: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/schoolDistricts")
  async disconnectSchoolDistricts(
    @common.Param() params: SubscriptionWhereUniqueInput,
    @common.Body() body: SchoolDistrictWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schoolDistricts: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "SubscriptionPlan",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/subscriptionPlans")
  @ApiNestedQuery(SubscriptionPlanFindManyArgs)
  async findManySubscriptionPlans(
    @common.Req() request: Request,
    @common.Param() params: SubscriptionWhereUniqueInput
  ): Promise<SubscriptionPlan[]> {
    const query = plainToClass(SubscriptionPlanFindManyArgs, request.query);
    const results = await this.service.findSubscriptionPlans(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/subscriptionPlans")
  async connectSubscriptionPlans(
    @common.Param() params: SubscriptionWhereUniqueInput,
    @common.Body() body: SubscriptionPlanWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      subscriptionPlans: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/subscriptionPlans")
  async updateSubscriptionPlans(
    @common.Param() params: SubscriptionWhereUniqueInput,
    @common.Body() body: SubscriptionPlanWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      subscriptionPlans: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/subscriptionPlans")
  async disconnectSubscriptionPlans(
    @common.Param() params: SubscriptionWhereUniqueInput,
    @common.Body() body: SubscriptionPlanWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      subscriptionPlans: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
