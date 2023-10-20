// src/prisma.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  public prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  get product() {
    return this.prisma.product;
  }
}