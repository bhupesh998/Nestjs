import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User-Module/user.module';
import { BookModule } from './Book-Module/book.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [UserModule, BookModule, StudentModule],
  controllers: [AppController],
  providers: [AppService], // AppService is Local to this Module
  exports: [AppService] // with exports now the AppService can be used by other modules
})
export class AppModule {}
