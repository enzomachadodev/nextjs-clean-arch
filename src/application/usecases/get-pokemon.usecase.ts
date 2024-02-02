import { PokemonGateway } from "@/domain/gateways/pokemon.gateway";
import { UseCase as DefaultUseCase } from "./usecase";
import { PokemonEntity } from "@/domain/entities/pokemon.entity";

export namespace GetPokemonUseCase {
	export type Input = {
		name: string;
	};

	export type Output = PokemonEntity;

	export class UseCase implements DefaultUseCase<Input, Output> {
		constructor(private pokemonGateway: PokemonGateway) {}

		async execute(input: Input): Promise<Output> {
			return await this.pokemonGateway.findByName(input.name);
		}
	}
}

