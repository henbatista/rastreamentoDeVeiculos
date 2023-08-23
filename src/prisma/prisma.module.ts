import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [AppService]
})


export class PrismaModule {}
