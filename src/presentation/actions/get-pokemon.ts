import { GetPokemonUseCase } from "@/application/usecases/get-pokemon.usecase";
import { container, Registry } from "@/infrastructure/container-registry";

export const getPokemon = async (name: string) => {
	const useCase = container.get<GetPokemonUseCase.UseCase>(
		Registry.GetPokemonUseCase
	);
	return await useCase.execute({ name });
};
