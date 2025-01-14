import { Injectable, NotFoundException } from '@nestjs/common';

import { OrderRepository } from '../infrastructure/order.repository';
import { TCreateOrder } from '../domain/order.dto';
import { Order } from '../domain/order';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  async create(order: TCreateOrder) {
    const newOrder = new Order({
      productId: order.productId,
      quantity: order.quantity,
      userId: order.userId,
    });
    const createdOrder = await this.orderRepository.save(newOrder);
    return createdOrder.toJSON();
  }

  async findById(id: number) {
    const order = await this.orderRepository.findById(id);
    if (!order) throw new NotFoundException('Order not found');
    return order.toJSON();
  }
}
