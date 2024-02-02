import { UseCase as DefaultUseCase } from "./usecase";
import { SchedulingGateway } from "@/domain/gateways/scheduling.gateway";
import { PokemonEntity } from "@/domain/entities/pokemon.entity";
import { SchedulingEntity } from "@/domain/entities/scheduling.entity";

export namespace AddPokemonInSchedulingUseCase {
	export type Input = {
		pokemon: PokemonEntity;
	};

	export type Output = SchedulingEntity;

	export class UseCase implements DefaultUseCase<Input, Output> {
		constructor(private schedulingGateway: SchedulingGateway) {}

		async execute({ pokemon }: Input): Promise<Output> {
			const scheduling = this.schedulingGateway.get();
			scheduling.addPokemon(pokemon);
			this.schedulingGateway.save(scheduling);
			return scheduling;
		}
	}
}

