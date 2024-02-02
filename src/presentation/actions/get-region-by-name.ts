import { GetRegionUseCase } from "@/application/usecases/get-region.usecase";
import { Registry, container } from "@/infrastructure/container-registry";

export const getRegionByName = async (name: string) => {
	const useCase = container.get<GetRegionUseCase.UseCase>(
		Registry.GetRegionUseCase
	);
	return await useCase.execute({ name });
};

