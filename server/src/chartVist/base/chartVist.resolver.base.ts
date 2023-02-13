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
import { CreateChartVistArgs } from "./CreateChartVistArgs";
import { UpdateChartVistArgs } from "./UpdateChartVistArgs";
import { DeleteChartVistArgs } from "./DeleteChartVistArgs";
import { ChartVistFindManyArgs } from "./ChartVistFindManyArgs";
import { ChartVistFindUniqueArgs } from "./ChartVistFindUniqueArgs";
import { ChartVist } from "./ChartVist";
import { MedicalRecordFindManyArgs } from "../../medicalRecord/base/MedicalRecordFindManyArgs";
import { MedicalRecord } from "../../medicalRecord/base/MedicalRecord";
import { School } from "../../school/base/School";
import { Staf } from "../../staf/base/Staf";
import { Student } from "../../student/base/Student";
import { ChartVistService } from "../chartVist.service";

@graphql.Resolver(() => ChartVist)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ChartVistResolverBase {
  constructor(
    protected readonly service: ChartVistService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ChartVist",
    action: "read",
    possession: "any",
  })
  async _chartVistsMeta(
    @graphql.Args() args: ChartVistFindManyArgs
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
  @graphql.Query(() => [ChartVist])
  @nestAccessControl.UseRoles({
    resource: "ChartVist",
    action: "read",
    possession: "any",
  })
  async chartVists(
    @graphql.Args() args: ChartVistFindManyArgs
  ): Promise<ChartVist[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ChartVist, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ChartVist",
    action: "read",
    possession: "own",
  })
  async chartVist(
    @graphql.Args() args: ChartVistFindUniqueArgs
  ): Promise<ChartVist | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ChartVist)
  @nestAccessControl.UseRoles({
    resource: "ChartVist",
    action: "create",
    possession: "any",
  })
  async createChartVist(
    @graphql.Args() args: CreateChartVistArgs
  ): Promise<ChartVist> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        school: args.data.school
          ? {
              connect: args.data.school,
            }
          : undefined,

        staf: args.data.staf
          ? {
              connect: args.data.staf,
            }
          : undefined,

        student: args.data.student
          ? {
              connect: args.data.student,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ChartVist)
  @nestAccessControl.UseRoles({
    resource: "ChartVist",
    action: "update",
    possession: "any",
  })
  async updateChartVist(
    @graphql.Args() args: UpdateChartVistArgs
  ): Promise<ChartVist | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          school: args.data.school
            ? {
                connect: args.data.school,
              }
            : undefined,

          staf: args.data.staf
            ? {
                connect: args.data.staf,
              }
            : undefined,

          student: args.data.student
            ? {
                connect: args.data.student,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => ChartVist)
  @nestAccessControl.UseRoles({
    resource: "ChartVist",
    action: "delete",
    possession: "any",
  })
  async deleteChartVist(
    @graphql.Args() args: DeleteChartVistArgs
  ): Promise<ChartVist | null> {
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
  @graphql.ResolveField(() => [MedicalRecord])
  @nestAccessControl.UseRoles({
    resource: "MedicalRecord",
    action: "read",
    possession: "any",
  })
  async medicalRecord(
    @graphql.Parent() parent: ChartVist,
    @graphql.Args() args: MedicalRecordFindManyArgs
  ): Promise<MedicalRecord[]> {
    const results = await this.service.findMedicalRecord(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => School, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "School",
    action: "read",
    possession: "any",
  })
  async school(@graphql.Parent() parent: ChartVist): Promise<School | null> {
    const result = await this.service.getSchool(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Staf, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Staf",
    action: "read",
    possession: "any",
  })
  async staf(@graphql.Parent() parent: ChartVist): Promise<Staf | null> {
    const result = await this.service.getStaf(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Student, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "read",
    possession: "any",
  })
  async student(@graphql.Parent() parent: ChartVist): Promise<Student | null> {
    const result = await this.service.getStudent(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
