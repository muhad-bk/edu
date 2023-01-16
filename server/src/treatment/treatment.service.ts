import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TreatmentServiceBase } from "./base/treatment.service.base";

@Injectable()
export class TreatmentService extends TreatmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
