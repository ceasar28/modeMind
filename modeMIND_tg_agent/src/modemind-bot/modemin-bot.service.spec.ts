import { Test, TestingModule } from '@nestjs/testing';
import { ModeminBotService } from './modemin-bot.service';

describe('ModeminBotService', () => {
  let service: ModeminBotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModeminBotService],
    }).compile();

    service = module.get<ModeminBotService>(ModeminBotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
