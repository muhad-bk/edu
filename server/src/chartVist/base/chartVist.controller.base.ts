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
import { ChartVistService } from "../chartVist.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ChartVistCreateInput } from "./ChartVistCreateInput";
import { ChartVistWhereInput } from "./ChartVistWhereInput";
import { ChartVistWhereUniqueInput } from "./ChartVistWhereUniqueInput";
import { ChartVistFindManyArgs } from "./ChartVistFindManyArgs";
import { ChartVistUpdateInput } from "./ChartVistUpdateInput";
import { ChartVist } from "./ChartVist";
import { TreatmentFindManyArgs } from "../../treatment/base/TreatmentFindManyArgs";
import { Treatment } from "../../treatment/base/Treatment";
import { TreatmentWhereUniqueInput } from "../../treatment/base/TreatmentWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ChartVistControllerBase {
  constructor(
    protected readonly service: ChartVistService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ChartVist",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ChartVist })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: ChartVistCreateInput): Promise<ChartVist> {
    return await this.service.create({
      data: {
        ...data,

        school: data.school
          ? {
              connect: data.school,
            }
          : undefined,

        staf: data.staf
          ? {
              connect: data.staf,
            }
          : undefined,

        student: data.student
          ? {
              connect: data.student,
            }
          : undefined,
      },
      select: {
        chartType: true,
        createdAt: true,
        endTime: true,
        id: true,

        school: {
          select: {
            id: true,
          },
        },

        staf: {
          select: {
            id: true,
          },
        },

        startTime: true,

        student: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ChartVist",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [ChartVist] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(ChartVistFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<ChartVist[]> {
    const args = plainToClass(ChartVistFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        chartType: true,
        createdAt: true,
        endTime: true,
        id: true,

        school: {
          select: {
            id: true,
          },
        },

        staf: {
          select: {
            id: true,
          },
        },

        startTime: true,

        student: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ChartVist",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ChartVist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ChartVistWhereUniqueInput
  ): Promise<ChartVist | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        chartType: true,
        createdAt: true,
        endTime: true,
        id: true,

        school: {
          select: {
            id: true,
          },
        },

        staf: {
          select: {
            id: true,
          },
        },

        startTime: true,

        student: {
          select: {
            id: true,
          },
        },

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
    resource: "ChartVist",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ChartVist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ChartVistWhereUniqueInput,
    @common.Body() data: ChartVistUpdateInput
  ): Promise<ChartVist | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          school: data.school
            ? {
                connect: data.school,
              }
            : undefined,

          staf: data.staf
            ? {
                connect: data.staf,
              }
            : undefined,

          student: data.student
            ? {
                connect: data.student,
              }
            : undefined,
        },
        select: {
          chartType: true,
          createdAt: true,
          endTime: true,
          id: true,

          school: {
            select: {
              id: true,
            },
          },

          staf: {
            select: {
              id: true,
            },
          },

          startTime: true,

          student: {
            select: {
              id: true,
            },
          },

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
    resource: "ChartVist",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ChartVist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ChartVistWhereUniqueInput
  ): Promise<ChartVist | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          chartType: true,
          createdAt: true,
          endTime: true,
          id: true,

          school: {
            select: {
              id: true,
            },
          },

          staf: {
            select: {
              id: true,
            },
          },

          startTime: true,

          student: {
            select: {
              id: true,
            },
          },

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
    resource: "Treatment",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/treatments")
  @ApiNestedQuery(TreatmentFindManyArgs)
  async findManyTreatments(
    @common.Req() request: Request,
    @common.Param() params: ChartVistWhereUniqueInput
  ): Promise<Treatment[]> {
    const query = plainToClass(TreatmentFindManyArgs, request.query);
    const results = await this.service.findTreatments(params.id, {
      ...query,
      select: {
        approval: {
          select: {
            id: true,
          },
        },

        chartVist: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        generalDetails: true,
        id: true,
        medicationDetails: true,

        student: {
          select: {
            id: true,
          },
        },

        timingDetails: true,
        treatmentDetails: true,
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
    resource: "ChartVist",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/treatments")
  async connectTreatments(
    @common.Param() params: ChartVistWhereUniqueInput,
    @common.Body() body: TreatmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      treatments: {
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
    resource: "ChartVist",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/treatments")
  async updateTreatments(
    @common.Param() params: ChartVistWhereUniqueInput,
    @common.Body() body: TreatmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      treatments: {
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
    resource: "ChartVist",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/treatments")
  async disconnectTreatments(
    @common.Param() params: ChartVistWhereUniqueInput,
    @common.Body() body: TreatmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      treatments: {
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
