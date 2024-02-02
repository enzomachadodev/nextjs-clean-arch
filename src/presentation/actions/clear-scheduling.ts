import { ClearSchedulingUseCase } from "@/application/usecases/clear-scheduling.usecase";
import { container, Registry } from "@/infrastructure/container-registry";

export const clearScheduling = async () => {
	const useCase = container.get<ClearSchedulingUseCase.UseCase>(
		Registry.ClearSchedulingUseCase
	);
	return await useCase.execute();
};

