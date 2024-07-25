import { IsEmailCustom } from 'src/infra/http/classValidator/decorators/IsEmailCustom';
import { IsNotEmptyCustom } from 'src/infra/http/classValidator/decorators/IsNotEmptyCustom';
import { IsStringCustom } from 'src/infra/http/classValidator/decorators/IsStringCustom';
import { MinLengthCustom } from 'src/infra/http/classValidator/decorators/MinLengthCustom';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserBody {
  @IsStringCustom()
  @IsNotEmptyCustom()
  @IsEmailCustom()
  @ApiProperty()
  email: string;

  @IsStringCustom()
  @IsNotEmptyCustom()
  @ApiProperty()
  name: string;

  @IsStringCustom()
  @IsNotEmptyCustom()
  @MinLengthCustom(6)
  @ApiProperty()
  password: string;
}
