import { Injectable } from "@nestjs/common";
import { AuthDto } from "./dto/create-auth.dto";
import { UpdateAuthDto } from "./dto/update-auth.dto";
import { UserResponse } from "../user/interface/user-response";
import { UserEntity } from "../user/models/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {
  }

  async register(createUser: AuthDto): Promise<UserResponse> {
    const user = new UserEntity();
    Object.assign(user, createUser);
    const createdUser = await this.userRepository.save(user);
    return { user: createdUser };
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
