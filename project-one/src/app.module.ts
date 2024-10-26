import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User-Module/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService], // AppService is Local to this Module
  exports: [AppService] // with exports now the AppService can be used by other modules
})
export class AppModule {}
