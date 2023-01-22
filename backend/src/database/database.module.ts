import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService, DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
