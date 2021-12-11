import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/user.module";
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "plumtree",
    database: "microserviceDB",
    autoLoadEntities: true,
    synchronize: true
  }), UserModule, AuthModule, RoleModule, PermissionModule, CommonModule],
  controllers: [],
  providers: []
})
export class AppModule {
}
