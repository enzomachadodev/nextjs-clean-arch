import { ListDatesUseCase } from "@/application/usecases/list-dates.usecase";
import { Registry, container } from "@/infrastructure/container-registry";

export const getDates = async () => {
	const useCase = container.get<ListDatesUseCase.UseCase>(
		Registry.ListDatesUseCase
	);
	return await useCase.execute();
};

