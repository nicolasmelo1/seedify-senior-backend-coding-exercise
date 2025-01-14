import { createZodDto } from 'nestjs-zod';
import * as z from 'zod';

const definitions = {
  id: 'the id of the order',
  productId: 'the id of the product',
  quantity: 'the quantity of the order',
  userId: 'the id of the user',
};

const CreateOrderSchema = z.object({
  productId: z.coerce.number().describe(definitions.productId),
  quantity: z.coerce.number().describe(definitions.quantity),
  userId: z.coerce.number().describe(definitions.userId),
});

const FindOrderSchema = z.object({
  id: z.coerce.number().describe(definitions.id),
  productId: z.coerce.number().describe(definitions.productId),
  quantity: z.coerce.number().describe(definitions.quantity),
  userId: z.coerce.number().describe(definitions.userId),
});

export type TCreateOrder = z.input<typeof CreateOrderSchema>;

export class CreateOrderDto extends createZodDto(CreateOrderSchema) {}
export class FindOrderDto extends createZodDto(FindOrderSchema) {}
