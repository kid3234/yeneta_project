import { Module } from '@nestjs/common';
import { ProductsController } from './products/products.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [PrismaService],
})
export class AppModule {}
