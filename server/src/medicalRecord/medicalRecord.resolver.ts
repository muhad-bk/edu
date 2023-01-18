import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MedicalRecordResolverBase } from "./base/medicalRecord.resolver.base";
import { MedicalRecord } from "./base/MedicalRecord";
import { MedicalRecordService } from "./medicalRecord.service";

@graphql.Resolver(() => MedicalRecord)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MedicalRecordResolver extends MedicalRecordResolverBase {
  constructor(
    protected readonly service: MedicalRecordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
