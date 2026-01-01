import { ApiProperty } from "@nestjs/swagger";

export class CreateBetDto {
  @ApiProperty()
  challengerName: string;

  @ApiProperty({
    description: "challenger email for contact",
    minimum: 3,
  })
  challengerEmail: string;

  @ApiProperty()
  rivalName: string;

  @ApiProperty()
  rivalEmail?: string;

  @ApiProperty()
  betTitle: string;

  @ApiProperty()
  betUrl: string;

  @ApiProperty()
  stake: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  deadline: string;

  @ApiProperty()
  visibility: string;
};
