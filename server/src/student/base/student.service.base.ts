/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Student,
  Approval,
  ChartVist,
  Parent,
  MedicalRecord,
  School,
  User,
} from "@prisma/client";

export class StudentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.StudentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentFindManyArgs>
  ): Promise<number> {
    return this.prisma.student.count(args);
  }

  async findMany<T extends Prisma.StudentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentFindManyArgs>
  ): Promise<Student[]> {
    return this.prisma.student.findMany(args);
  }
  async findOne<T extends Prisma.StudentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentFindUniqueArgs>
  ): Promise<Student | null> {
    return this.prisma.student.findUnique(args);
  }
  async create<T extends Prisma.StudentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentCreateArgs>
  ): Promise<Student> {
    return this.prisma.student.create<T>(args);
  }
  async update<T extends Prisma.StudentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentUpdateArgs>
  ): Promise<Student> {
    return this.prisma.student.update<T>(args);
  }
  async delete<T extends Prisma.StudentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentDeleteArgs>
  ): Promise<Student> {
    return this.prisma.student.delete(args);
  }

  async findApprovals(
    parentId: string,
    args: Prisma.ApprovalFindManyArgs
  ): Promise<Approval[]> {
    return this.prisma.student
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .approvals(args);
  }

  async findChartVists(
    parentId: string,
    args: Prisma.ChartVistFindManyArgs
  ): Promise<ChartVist[]> {
    return this.prisma.student
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .chartVists(args);
  }

  async findParent(
    parentId: string,
    args: Prisma.ParentFindManyArgs
  ): Promise<Parent[]> {
    return this.prisma.student
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .parent(args);
  }

  async findRecords(
    parentId: string,
    args: Prisma.MedicalRecordFindManyArgs
  ): Promise<MedicalRecord[]> {
    return this.prisma.student
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .records(args);
  }

  async getSchool(parentId: string): Promise<School | null> {
    return this.prisma.student
      .findUnique({
        where: { id: parentId },
      })
      .school();
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.student
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
