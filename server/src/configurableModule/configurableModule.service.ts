import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConfigurableModuleServiceBase } from "./base/configurableModule.service.base";

@Injectable()
export class ConfigurableModuleService extends ConfigurableModuleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
