import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./models/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserResponse } from "./interface/user-response";
import { UsersResponse } from "./interface/users-response";
import { PaginateResponse } from "./interface/paginate-response";

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>) {
  }

  async findAll(): Promise<UsersResponse> {
    const users = await this.userRepo.find();
    return { users };
  }

  async paginate(page: number): Promise<PaginateResponse> {
    const take = 10;
    const [users, total] = await this.userRepo.findAndCount({
      take,
      skip: (page - 1) * take
    });
    return {
      data: users, meta: {
        totalUsers: total,
        page,
        last_page: Math.ceil(total / take)
      }
    };
  }

  async create(createUser: CreateUserDto): Promise<UserResponse> {
    const user = new UserEntity();
    Object.assign(user, createUser);
    const createdUser = await this.userRepo.save({ ...user, role: { id: createUser.role_id } });
    return { user: createdUser };
  }
}