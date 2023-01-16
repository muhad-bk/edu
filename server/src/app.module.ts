import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { UserModule } from "./user/user.module";
import { SchoolModule } from "./school/school.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { ConfigurableModuleModule } from "./configurableModule/configurableModule.module";
import { StafModule } from "./staf/staf.module";
import { RoleModule } from "./role/role.module";
import { PermissionModule } from "./permission/permission.module";
import { StudentModule } from "./student/student.module";
import { RecordModule } from "./record/record.module";
import { ParentModule } from "./parent/parent.module";
import { SchoolDistrictModule } from "./schoolDistrict/schoolDistrict.module";
import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./kafka/kafka.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  controllers: [],
  imports: [
    UserModule,
    SchoolModule,
    SubscriptionModule,
    ConfigurableModuleModule,
    StafModule,
    RoleModule,
    PermissionModule,
    StudentModule,
    RecordModule,
    ParentModule,
    SchoolDistrictModule,
    ACLModule,
    AuthModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    KafkaModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
