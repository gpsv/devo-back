import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { DepartamentModule } from './departament/departament.module';
import { PositionModule } from './position/position.module';
import { RolModule } from './rol/rol.module';
import { UserPreferenceModule } from './user-preference/user-preference.module';
import { ZipCodeModule } from './zip_code/zip_code.module';
import { ChurcheModule } from './churche/churche.module';
import { DevotionalJournalModule } from './devotional-journal/devotional-journal.module';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/devotionalNest'),
    AuthModule,
    BookModule,
    ChurcheModule,
    CommonModule,
    DepartamentModule,
    DevotionalJournalModule,
    PositionModule,
    RolModule,
    UserPreferenceModule,
    ZipCodeModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
