import { Type } from 'class-transformer';
import {
  IsAlphanumeric,
  IsDateString,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Relation } from 'typeorm';

export class CreateUserDto {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  lastname: string;

  @IsString()
  @MaxLength(50)
  @MinLength(8)
  @IsNotEmpty()
  @IsAlphanumeric()
  username: string;

  @IsString()
  @MaxLength(50)
  @IsStrongPassword({
    minLength: 10,
    minLowercase: 1,
    minUppercase: 1,
    minSymbols: 1,
    minNumbers: 1,
  })
  password: string;

  @IsEmail()
  email: string;

  @Type(() => Date)
  birthday: Date;

  @IsInt()
  @IsNotEmpty()
  roleId: Relation<'Role'>;
}
