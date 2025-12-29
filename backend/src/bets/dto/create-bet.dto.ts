import { ApiProperty } from "@nestjs/swagger";

export class CreateBetDto {
  @ApiProperty()
  challanger_name: string;

  @ApiProperty({
    description: "challanger email for contact",
    minimum: 3,
  })
  challanger_email: string;

  @ApiProperty()
  rival_name: string;

  @ApiProperty()
  rival_email?: string;

  @ApiProperty()
  betTitle: string;

  @ApiProperty()
  betUrl: string;

  @ApiProperty()
  stack: string;

  @ApiProperty()
  deadline: string;

  @ApiProperty()
  visibility: string;
};
