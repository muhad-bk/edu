import { Module } from "@nestjs/common";
import { SchoolDistrictModuleBase } from "./base/schoolDistrict.module.base";
import { SchoolDistrictService } from "./schoolDistrict.service";
import { SchoolDistrictController } from "./schoolDistrict.controller";
import { SchoolDistrictResolver } from "./schoolDistrict.resolver";

@Module({
  imports: [SchoolDistrictModuleBase],
  controllers: [SchoolDistrictController],
  providers: [SchoolDistrictService, SchoolDistrictResolver],
  exports: [SchoolDistrictService],
})
export class SchoolDistrictModule {}
