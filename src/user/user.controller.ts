import { Body, Controller, Get, Post, Query } from "@nestjs/common";

import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersResponse } from "./interface/users-response";
import { PaginateResponse } from "./interface/paginate-response";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  async findAll(@Query("page") page: number = 1): Promise<PaginateResponse> {
    return await this.userService.paginate(page);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }


}
