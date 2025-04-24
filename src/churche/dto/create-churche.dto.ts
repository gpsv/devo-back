import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsMongoId,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { enumTypeChurche } from '../entities/churche.entity';
import { Transform } from 'class-transformer';

export class CreateChurcheDto {
  @IsString()
  @MinLength(2)
  keyName: string;

  @IsString()
  @MinLength(2)
  name: string;

  @IsString()
  @IsOptional()
  longName: string;

  @IsString()
  @MinLength(5)
  address: string;

  @IsString()
  @MinLength(1)
  number: string;

  @IsString()
  @MinLength(5)
  zipCode: string;

  @IsString()
  @MinLength(4)
  colonia: string;

  @IsString()
  @MinLength(4)
  city: string;

  @IsString()
  @MinLength(4)
  state: string;

  @IsString()
  @MinLength(10)
  phoneNumber: string;

  @IsString()
  @MinLength(2)
  @IsEnum(enumTypeChurche)
  typeChurch: string;

  @Transform(({ value }) => new Date(value))
  @IsDate()
  @IsOptional()
  startDate: Date;

  @IsBoolean()
  status: boolean;

  @IsString()
  @MinLength(5)
  @IsOptional()
  avatar: string;

  @IsString()
  @MinLength(2)
  @IsOptional()
  background: string;

  @IsMongoId()
  @IsOptional()
  mainLeader_id: string;

  @IsMongoId()
  @IsOptional()
  believers: string;
}
