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
  Treatment,
  Approval,
  ChartVist,
  Student,
} from "@prisma/client";

export class TreatmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TreatmentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TreatmentFindManyArgs>
  ): Promise<number> {
    return this.prisma.treatment.count(args);
  }

  async findMany<T extends Prisma.TreatmentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TreatmentFindManyArgs>
  ): Promise<Treatment[]> {
    return this.prisma.treatment.findMany(args);
  }
  async findOne<T extends Prisma.TreatmentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TreatmentFindUniqueArgs>
  ): Promise<Treatment | null> {
    return this.prisma.treatment.findUnique(args);
  }
  async create<T extends Prisma.TreatmentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TreatmentCreateArgs>
  ): Promise<Treatment> {
    return this.prisma.treatment.create<T>(args);
  }
  async update<T extends Prisma.TreatmentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TreatmentUpdateArgs>
  ): Promise<Treatment> {
    return this.prisma.treatment.update<T>(args);
  }
  async delete<T extends Prisma.TreatmentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TreatmentDeleteArgs>
  ): Promise<Treatment> {
    return this.prisma.treatment.delete(args);
  }

  async getApproval(parentId: string): Promise<Approval | null> {
    return this.prisma.treatment
      .findUnique({
        where: { id: parentId },
      })
      .approval();
  }

  async getChartVist(parentId: string): Promise<ChartVist | null> {
    return this.prisma.treatment
      .findUnique({
        where: { id: parentId },
      })
      .chartVist();
  }

  async getStudent(parentId: string): Promise<Student | null> {
    return this.prisma.treatment
      .findUnique({
        where: { id: parentId },
      })
      .student();
  }
}
