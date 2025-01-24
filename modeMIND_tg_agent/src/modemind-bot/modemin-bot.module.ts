import { Module } from '@nestjs/common';
import { ModeminBotService } from './modemin-bot.service';

@Module({
  providers: [ModeminBotService]
})
export class ModeminBotModule {}
