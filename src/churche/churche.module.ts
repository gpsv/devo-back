import { Module } from '@nestjs/common';
import { ChurcheService } from './churche.service';
import { ChurcheController } from './churche.controller';

@Module({
  controllers: [ChurcheController],
  providers: [ChurcheService],
})
export class ChurcheModule {}
