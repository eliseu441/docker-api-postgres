import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MovieRepository } from './repository/movie.repository';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  controllers: [MovieController],
  providers: [PrismaService, MovieService, MovieRepository],
})
export class MovieModule {}