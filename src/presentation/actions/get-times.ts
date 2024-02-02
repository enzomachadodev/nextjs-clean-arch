import { ListTimesUseCase } from "@/application/usecases/list-times.usecase";
import { Registry, container } from "@/infrastructure/container-registry";

export const getTimes = async (date: string) => {
	const useCase = container.get<ListTimesUseCase.UseCase>(
		Registry.ListTimesUseCase
	);
	return await useCase.execute({ date });
};

