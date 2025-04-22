import { Module } from '@nestjs/common';
import { ZipCodeService } from './zip_code.service';
import { ZipCodeController } from './zip_code.controller';

@Module({
  controllers: [ZipCodeController],
  providers: [ZipCodeService],
})
export class ZipCodeModule {}
