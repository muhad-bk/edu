import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChartVistServiceBase } from "./base/chartVist.service.base";

@Injectable()
export class ChartVistService extends ChartVistServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
