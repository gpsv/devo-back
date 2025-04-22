import { Module } from '@nestjs/common';
import { ChurcheService } from './churche.service';
import { ChurcheController } from './churche.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Churche, ChurcheSchema } from './entities/churche.entity';

@Module({
  controllers: [ChurcheController],
  providers: [ChurcheService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Churche.name,
        schema: ChurcheSchema,
      },
    ]),
  ],
})
export class ChurcheModule {}
