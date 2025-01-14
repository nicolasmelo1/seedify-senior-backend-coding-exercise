import { OrderController } from './order.controller';
import { OrderService } from '../application/order.service';
import { OrderRepository } from '../infrastructure/order.repository';
import { InMemoryStore } from '../../core/helpers';
import { Order } from '../domain/order';

describe('Order Controller', () => {
  const createOrder = {
    productId: 1,
    quantity: 1,
    userId: 1,
  };

  const findOrder = {
    id: 1,
    productId: 1,
    quantity: 1,
    userId: 1,
  };

  let orderController: OrderController;
  let orderService: OrderService;
  let orderRepository: OrderRepository;

  beforeEach(() => {
    orderRepository = new OrderRepository(new InMemoryStore());
    orderService = new OrderService(orderRepository);
    orderController = new OrderController(orderService);
  });

  it('should create a new order', async () => {
    const result = await orderController.create(createOrder);
    expect(result.productId).toBe(createOrder.productId);
    expect(result.quantity).toBe(createOrder.quantity);
    expect(result.userId).toBe(createOrder.userId);
    expect(result.id).toBe(1);
  });

  it('should find an order by id', async () => {
    orderRepository.findById = jest
      .fn()
      .mockResolvedValue(Promise.resolve(new Order(findOrder)));

    const result = await orderController.findById(1);

    expect(result.quantity).toBe(findOrder.quantity);
    expect(result.productId).toBe(findOrder.productId);
    expect(result.userId).toBe(findOrder.userId);
    expect(result.id).toBe(findOrder.id);
  });

  it('should throw an error if the order does not exist', async () => {
    orderRepository.findById = jest.fn().mockResolvedValue(undefined);

    await expect(orderController.findById(1)).rejects.toThrow(
      'Order not found',
    );
  });
});
