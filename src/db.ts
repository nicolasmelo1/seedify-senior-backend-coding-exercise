import { Order } from './order/domain/order';

export type Db = {
  orders: Record<number, Order>;
};
