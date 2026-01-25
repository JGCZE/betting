import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

  @ApiProperty()
  userName: string

  @ApiProperty({
    description: "user email",
  })
  email: string;

  @ApiProperty()
  password: string
}