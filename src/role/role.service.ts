import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateRoleDto } from "./dto/create-role.dto";
import { Role } from "./entities/role.entity";
import { AbstractService } from "../common/abstract.service";

@Injectable()
export class RoleService extends AbstractService {
  constructor(@InjectRepository(Role) private readonly roleRepository: Repository<Role>) {
    super(roleRepository);
  }

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const role = new Role();
    const per = createRoleDto.permissions.map(id => ({ id }));
    Object.assign(role, createRoleDto);
    return await this.roleRepository.save({ ...role, permissions: per });
  }


}
