import { Module } from '@nestjs/common';
import { workerProviders } from './temporal.worker.providers';
import { TemporalController } from './temporal.controller';

@Module({
  providers: [...workerProviders],
  controllers: [TemporalController],
})
export class TemporalModule {}
