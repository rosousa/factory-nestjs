import { IsInt, IsOptional, IsString } from 'class-validator';
import { Pokemon } from '../entities/pokemon.entity';
import { Prisma } from '@prisma/client';

export class CreatePokemonDto implements Pokemon {
  @IsString()
  name: string;

  @IsInt()
  @IsOptional()
  height?: number | null;

  @IsOptional()
  images?: Prisma.ImageUncheckedCreateNestedManyWithoutPokemonInput;
}
