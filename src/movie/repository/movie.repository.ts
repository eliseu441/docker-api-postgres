import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';

@Injectable()
export class MovieRepository {
  constructor(private readonly prisma: PrismaService) {}

  async paginate(
    page: number,
    size: number,
    sort: string,
    order: string,
    search: string,
  ) {
    const results = await this.prisma.movie.findMany({
      skip: page * size,
      take: Number(size),
      where: { name: { contains: search, mode: 'insensitive' } },
      orderBy: { [sort]: order },
    });
    const totalItems = await this.prisma.movie.count({
      where: { name: { contains: search, mode: 'insensitive' } },
    });
    return { results, totalItems };
  }

  async findById(id: bigint) {
    return await this.prisma.movie.findFirstOrThrow({
      where: { id },
    });
  }

  async create(createMovieDTO: CreateMovieDto) {
    return await this.prisma.movie.create({ data: createMovieDTO });
  }

  async update(id: bigint, updateMovieDTO: UpdateMovieDto) {
    return await this.prisma.movie.update({
      where: { id },
      data: updateMovieDTO,
    });
  }

  async remove(id: bigint) {
    return await this.prisma.movie.delete({
      where: { id },
    });
  }
}
