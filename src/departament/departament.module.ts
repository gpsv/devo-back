import { Module } from '@nestjs/common';
import { DepartamentService } from './departament.service';
import { DepartamentController } from './departament.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Departament, DepartamentSchema } from './entities/departament.entity';

@Module({
  controllers: [DepartamentController],
  providers: [DepartamentService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Departament.name,
        schema: DepartamentSchema,
      },
    ]),
  ],
})
export class DepartamentModule {}
