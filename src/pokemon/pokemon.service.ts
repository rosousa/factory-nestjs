import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PokemonService {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: CreatePokemonDto) {
    return this.prismaService.pokemon.create({ data });
  }

  findAll() {
    return this.prismaService.pokemon.findMany();
  }

  findOne(id: number) {
    return this.prismaService.pokemon.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return this.prismaService.pokemon.delete({
      where: {
        id,
      },
    });
  }
}
