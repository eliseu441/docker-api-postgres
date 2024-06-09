import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MovieModule } from './movie/movie.module';
import { PrismaService } from './prisma/prisma.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    MovieModule, 
    ProductModule,
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
