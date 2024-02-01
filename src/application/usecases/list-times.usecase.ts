import { TimeGateway } from "@/domain/gateways/time.gateway";
import { UseCase as DefaultUseCase } from "@/domain/usecases/usecase";

export namespace ListTimesUseCase {
	export type Input = null;

	export type Output = string[];

	export class UseCase implements DefaultUseCase<Input, Output> {
		constructor(private timeGateway: TimeGateway) {}

		async execute(): Promise<Output> {
			return await this.timeGateway.findAll();
		}
	}
}

