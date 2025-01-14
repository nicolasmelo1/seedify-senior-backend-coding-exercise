import { Global, Module } from '@nestjs/common';
import { InMemoryStore } from './helpers';

@Global()
@Module({
  controllers: [],
  providers: [InMemoryStore],
  exports: [InMemoryStore],
})
export class CoreModule {}
