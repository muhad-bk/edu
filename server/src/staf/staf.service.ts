import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StafServiceBase } from "./base/staf.service.base";

@Injectable()
export class StafService extends StafServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
