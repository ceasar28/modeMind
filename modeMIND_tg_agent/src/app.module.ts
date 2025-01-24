import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModeminBotModule } from './modemin-bot/modemin-bot.module';

@Module({
  imports: [ModeminBotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
