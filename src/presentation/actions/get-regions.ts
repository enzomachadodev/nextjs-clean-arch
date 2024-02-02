import { ListRegionsUseCase } from "@/application/usecases/list-regions.usecase";
import { Registry, container } from "@/infrastructure/container-registry";

export const getRegions = async () => {
	const useCase = container.get<ListRegionsUseCase.UseCase>(
		Registry.ListRegionsUseCase
	);
	return await useCase.execute();
};

