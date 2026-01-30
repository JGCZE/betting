import { ApiProperty, OmitType } from "@nestjs/swagger";

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
  category?: string;

  @ApiProperty()
  stake: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  deadline: string;

  @ApiProperty()
  visibility: string;
};

export class GetBetsHomePageDto {
  @ApiProperty()
  betTitle: string;

  @ApiProperty()
  challengerName: string;

  @ApiProperty()
  rivalName: string;

  @ApiProperty()
  stake: string;

  @ApiProperty()
  deadline: string;

  @ApiProperty()
  betUrl: string;

  @ApiProperty()
  _id: string;
}

export class BetResponseDto extends OmitType(
  CreateBetDto, ["challengerEmail", "rivalEmail"]) {

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  updatedAt: string;
}
