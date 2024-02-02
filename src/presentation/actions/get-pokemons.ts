import { ListPokemonsUseCase } from "@/application/usecases/list-pokemons.usecase";
import { Registry, container } from "@/infrastructure/container-registry";

export const getPokemons = async () => {
	const useCase = container.get<ListPokemonsUseCase.UseCase>(
		Registry.ListPokemonsUseCase
	);
	return await useCase.execute();
};

