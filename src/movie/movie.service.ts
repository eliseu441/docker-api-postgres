import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieRepository } from './repository/movie.repository';

@Injectable()
export class MovieService {
  constructor(private readonly repository: MovieRepository) {}

  async paginate(
    page: number,
    size: number,
    sort: string,
    order: string,
    search: string,
  ) {
    const { results, totalItems } = await this.repository.paginate(
      page,
      size,
      sort,
      order,
      search,
    );
    const totalPages = Math.ceil(totalItems / size) - 1;
    const currentPage = Number(page);

    return {
      results,
      pagination: {
        length: totalItems,
        size: size,
        lastPage: totalPages,
        page: currentPage,
        startIndex: currentPage * size,
        endIndex: currentPage * size + (size - 1),
      },
    };
  }

  async findById(id: bigint) {
    return await this.repository.findById(id);
  }

  async create(createMovieDTO: CreateMovieDto) {
    return await this.repository.create(createMovieDTO);
  }

  async update(id: bigint, updateMovieDTO: UpdateMovieDto) {
    return await this.repository.update(id, updateMovieDTO);
  }

  async remove(id: bigint) {
    return await this.repository.remove(id);
  }
}
