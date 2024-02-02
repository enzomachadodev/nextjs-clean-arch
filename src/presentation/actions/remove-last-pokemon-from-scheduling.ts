import { RemoveLastPokemonFromSchedulingUseCase } from "@/application/usecases/remove-last-pokemon-from-scheduling.usecase";
import { container, Registry } from "@/infrastructure/container-registry";

export const removeLastPokemon = async () => {
	const useCase = container.get<RemoveLastPokemonFromSchedulingUseCase.UseCase>(
		Registry.RemoveLastPokemonFromSchedulingUseCase
	);
	return await useCase.execute();
};

