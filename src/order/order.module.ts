import { Module } from '@nestjs/common';

import { OrderController } from './infrastructure/order.controller';
import { OrderRepository } from './infrastructure/order.repository';
import { OrderService } from './application/order.service';
import { CoreModule } from 'src/core/core.module';

@Module({
  imports: [CoreModule],
  controllers: [OrderController],
  providers: [OrderRepository, OrderService],
})
export class OrderModule {}
