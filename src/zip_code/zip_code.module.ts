import { Module } from '@nestjs/common';
import { ZipCodeService } from './zip_code.service';
import { ZipCodeController } from './zip_code.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ZipCode, ZipCodeSchema } from './entities/zip_code.entity';

@Module({
  controllers: [ZipCodeController],
  providers: [ZipCodeService],
  imports: [
    MongooseModule.forFeature([
      {
        name: ZipCode.name,
        schema: ZipCodeSchema,
      },
    ]),
  ],
})
export class ZipCodeModule {}
