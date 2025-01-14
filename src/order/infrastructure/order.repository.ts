import { Inject } from '@nestjs/common';

import { Order } from '../domain/order';
import { IOrderRepository } from '../domain/order.repository';
import { InMemoryStore } from '../../core/helpers';

export class OrderRepository implements IOrderRepository {
  constructor(@Inject(InMemoryStore) private readonly store: InMemoryStore) {}

  async save(order: Order) {
    return this.store.setItem('orders', order);
  }

  async findById(id: number): Promise<Order | undefined> {
    const orders = this.store.getItem('orders');
    const order = orders?.[id.toString()];
    return order;
  }
}
