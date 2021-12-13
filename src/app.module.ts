import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { RoleModule } from "./role/role.module";
import { OrderModule } from "./order/order.module";
import { CommonModule } from "./common/common.module";
import { ProductModule } from "./product/product.module";
import { OrderItemModule } from "./order-item/order-item.module";
import { PermissionGuard } from "./permission/permission.guard";
import { PermissionModule } from "./permission/permission.module";

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
  }), UserModule, AuthModule, RoleModule, PermissionModule, CommonModule, ProductModule, OrderModule, OrderItemModule],
  controllers: [],
  providers: [{
    provide: APP_GUARD,
    useClass: PermissionGuard
  }]
})
export class AppModule {
}
