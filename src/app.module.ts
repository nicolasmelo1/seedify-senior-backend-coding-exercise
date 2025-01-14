import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [OrderModule, CoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
