// src/products/products.controller.ts

import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Controller('products')
export class ProductsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async findAll() {
    return this.prisma.product.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.prisma.product.findUnique({
      where: { id: parseInt(id) },
    });
  }

  @Post()
  async create(@Body() data) {
    const { name, ...restData } = data; // Extract the `name` field from `data`

    return this.prisma.product.create({
      data: {
        name: name, // Assign the actual value of `name`
        ...restData, // Include the remaining properties from `data`
      },
    });
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data) {
    return this.prisma.product.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.prisma.product.delete({
      where: { id: parseInt(id) },
    });
  }
}