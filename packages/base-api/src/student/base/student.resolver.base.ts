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
import { CreateStudentArgs } from "./CreateStudentArgs";
import { UpdateStudentArgs } from "./UpdateStudentArgs";
import { DeleteStudentArgs } from "./DeleteStudentArgs";
import { StudentFindManyArgs } from "./StudentFindManyArgs";
import { StudentFindUniqueArgs } from "./StudentFindUniqueArgs";
import { Student } from "./Student";
import { ApprovalFindManyArgs } from "../../approval/base/ApprovalFindManyArgs";
import { Approval } from "../../approval/base/Approval";
import { ChartVistFindManyArgs } from "../../chartVist/base/ChartVistFindManyArgs";
import { ChartVist } from "../../chartVist/base/ChartVist";
import { ParentFindManyArgs } from "../../parent/base/ParentFindManyArgs";
import { Parent } from "../../parent/base/Parent";
import { MedicalRecordFindManyArgs } from "../../medicalRecord/base/MedicalRecordFindManyArgs";
import { MedicalRecord } from "../../medicalRecord/base/MedicalRecord";
import { School } from "../../school/base/School";
import { User } from "../../user/base/User";
import { StudentService } from "../student.service";

@graphql.Resolver(() => Student)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class StudentResolverBase {
  constructor(
    protected readonly service: StudentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "read",
    possession: "any",
  })
  async _studentsMeta(
    @graphql.Args() args: StudentFindManyArgs
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
  @graphql.Query(() => [Student])
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "read",
    possession: "any",
  })
  async students(
    @graphql.Args() args: StudentFindManyArgs
  ): Promise<Student[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Student, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "read",
    possession: "own",
  })
  async student(
    @graphql.Args() args: StudentFindUniqueArgs
  ): Promise<Student | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Student)
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "create",
    possession: "any",
  })
  async createStudent(
    @graphql.Args() args: CreateStudentArgs
  ): Promise<Student> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        school: {
          connect: args.data.school,
        },

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Student)
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "update",
    possession: "any",
  })
  async updateStudent(
    @graphql.Args() args: UpdateStudentArgs
  ): Promise<Student | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          school: {
            connect: args.data.school,
          },

          user: {
            connect: args.data.user,
          },
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

  @graphql.Mutation(() => Student)
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "delete",
    possession: "any",
  })
  async deleteStudent(
    @graphql.Args() args: DeleteStudentArgs
  ): Promise<Student | null> {
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
  @graphql.ResolveField(() => [Approval])
  @nestAccessControl.UseRoles({
    resource: "Approval",
    action: "read",
    possession: "any",
  })
  async approvals(
    @graphql.Parent() parent: Student,
    @graphql.Args() args: ApprovalFindManyArgs
  ): Promise<Approval[]> {
    const results = await this.service.findApprovals(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ChartVist])
  @nestAccessControl.UseRoles({
    resource: "ChartVist",
    action: "read",
    possession: "any",
  })
  async chartVists(
    @graphql.Parent() parent: Student,
    @graphql.Args() args: ChartVistFindManyArgs
  ): Promise<ChartVist[]> {
    const results = await this.service.findChartVists(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Parent])
  @nestAccessControl.UseRoles({
    resource: "Parent",
    action: "read",
    possession: "any",
  })
  async parent(
    @graphql.Parent() parent: Student,
    @graphql.Args() args: ParentFindManyArgs
  ): Promise<Parent[]> {
    const results = await this.service.findParent(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [MedicalRecord])
  @nestAccessControl.UseRoles({
    resource: "MedicalRecord",
    action: "read",
    possession: "any",
  })
  async records(
    @graphql.Parent() parent: Student,
    @graphql.Args() args: MedicalRecordFindManyArgs
  ): Promise<MedicalRecord[]> {
    const results = await this.service.findRecords(parent.id, args);

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
  async school(@graphql.Parent() parent: Student): Promise<School | null> {
    const result = await this.service.getSchool(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async user(@graphql.Parent() parent: Student): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}