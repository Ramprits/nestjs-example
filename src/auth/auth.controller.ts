import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserResponse } from "../user/interface/user-response";
import { AuthDto } from "./dto/create-auth.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post("register")
  async register(@Body() authDto: AuthDto): Promise<UserResponse> {
    return await this.authService.register(authDto);
  }

}
