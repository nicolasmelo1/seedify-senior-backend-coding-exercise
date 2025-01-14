import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
  HttpStatus,
  UsePipes,
} from '@nestjs/common';
import { ApiParam, ApiResponse } from '@nestjs/swagger';

import { OrderService } from '../application/order.service';
import { CreateOrderDto, FindOrderDto } from '../domain/order.dto';
import { ZodSerializerDto, ZodValidationPipe } from 'nestjs-zod';

@Controller('order')
@UsePipes(ZodValidationPipe)
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ZodSerializerDto(FindOrderDto)
  @ApiResponse({ status: HttpStatus.CREATED, type: FindOrderDto })
  @ApiResponse({
    description: 'When the order contains invalid input',
    status: HttpStatus.BAD_REQUEST,
    example: {
      statusCode: 400,
      message: 'Validation failed',
      errors: [
        {
          code: 'invalid_type',
          expected: 'number',
          received: 'nan',
          path: ['productId'],
          message: 'Expected number, received nan',
        },
      ],
    },
  })
  async create(@Body() order: CreateOrderDto) {
    return this.orderService.create(order);
  }

  @Get(':id')
  @ZodSerializerDto(FindOrderDto)
  @ApiParam({ name: 'id', type: 'number', description: 'The id of the order' })
  @ApiResponse({ status: HttpStatus.OK, type: FindOrderDto })
  @ApiResponse({
    description: 'When no order is found with given id',
    status: HttpStatus.NOT_FOUND,
    example: {
      message: 'Order not found',
      error: 'NotFound',
      statusCode: HttpStatus.NOT_FOUND,
    },
  })
  @ApiResponse({
    description: 'When the id is not a number',
    status: HttpStatus.NOT_ACCEPTABLE,
    example: {
      message: 'Validation failed (numeric string is expected)',
      error: 'Not Acceptable',
      statusCode: HttpStatus.NOT_ACCEPTABLE,
    },
  })
  async findById(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.orderService.findById(id);
  }
}
