import { DateGateway } from "@/domain/gateways/date.gateway";
import { UseCase as DefaultUseCase } from "@/domain/usecases/usecase";

export namespace ListDatesUseCase {
	export type Input = null;

	export type Output = string[];

	export class UseCase implements DefaultUseCase<Input, Output> {
		constructor(private dateGateway: DateGateway) {}

		async execute(): Promise<Output> {
			return await this.dateGateway.findAll();
		}
	}
}

