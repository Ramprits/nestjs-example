import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./models/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserResponse } from "./interface/user-response";
import { UsersResponse } from "./interface/users-response";
import { PaginateResponse } from "./interface/paginate-response";
import { AbstractService } from "../common/abstract.service";

@Injectable()
export class UserService extends AbstractService {
  constructor(@InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>) {
    super(userRepo);
  }

  async create(createUser: CreateUserDto): Promise<UserResponse> {
    const user = new UserEntity();
    Object.assign(user, createUser);
    const createdUser = await this.userRepo.save({ ...user, role: { id: createUser.role_id } });
    return { user: createdUser };
  }

  async findById(id: number): Promise<UserEntity> {
    return this.userRepo.findOne({ id });
  }
}