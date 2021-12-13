import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UserService } from "../user/user.service";
import { RoleService } from "../role/role.service";
import { UserEntity } from "../user/models/user.entity";
import { Role } from "../role/entities/role.entity";

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private readonly reflector: Reflector,
              private readonly userService: UserService,
              private readonly roleService: RoleService
  ) {
  }

  async canActivate(
    context: ExecutionContext
  ) {
    const access = this.reflector.get<string>("access", context.getHandler());
    const request = context.switchToHttp().getRequest();
    const user: UserEntity = await this.userService.findOne(1, ["role"]);
    const role: Role = await this.roleService.findOne(1, ["permissions"]);
    // return role.permissions.some(p => p.name === access);
    return true
  }
}
