import { AddPokemonInSchedulingUseCase } from "@/application/usecases/add-pokemon-in-scheduling.usecase";
import { PokemonEntity } from "@/domain/entities/pokemon.entity";
import { container, Registry } from "@/infrastructure/container-registry";

export const addPokemon = async (pokemon: PokemonEntity) => {
	const useCase = container.get<AddPokemonInSchedulingUseCase.UseCase>(
		Registry.AddPokemonInSchedulingUseCase
	);
	return await useCase.execute({ pokemon });
};

