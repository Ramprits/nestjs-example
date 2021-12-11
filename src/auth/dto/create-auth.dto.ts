import { IsEmail, IsNotEmpty } from "class-validator";

export class AuthDto {
  @IsEmail({ message: "Please enter valid email address" })
  email: string;
  @IsNotEmpty()
  password: string;
}
