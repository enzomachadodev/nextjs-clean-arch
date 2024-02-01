import { PokemonEntity } from "@/domain/entities/pokemon.entity";
import { PokemonGateway } from "@/domain/gateways/pokemon.gateway";
import { UseCase as DefaultUseCase } from "@/domain/usecases/usecase";
import { PokemonOutput, PokemonOutputMapper } from "../dtos/pokemon-output";

export namespace ListPokemonsUseCase {
	export type Input = null;

	export type Output = PokemonOutput[];

	export class UseCase implements DefaultUseCase<Input, Output> {
		constructor(private pokemonGateway: PokemonGateway) {}

		async execute(): Promise<Output> {
			const result = await this.pokemonGateway.findAll();
			return this.toOutput(result);
		}

		private toOutput(result: PokemonEntity[]): Output {
			return result.map((item) => PokemonOutputMapper.toOutput(item));
		}
	}
}

