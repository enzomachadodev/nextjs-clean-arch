import { PokemonEntity } from "@/domain/entities/pokemon.entity";

export type PokemonOutput = {
	name: string;
};

export class PokemonOutputMapper {
	static toOutput(entity: PokemonEntity): PokemonOutput {
		return entity.toJSON();
	}
}

