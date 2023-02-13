import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SchoolDistrictServiceBase } from "./base/schoolDistrict.service.base";

@Injectable()
export class SchoolDistrictService extends SchoolDistrictServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
