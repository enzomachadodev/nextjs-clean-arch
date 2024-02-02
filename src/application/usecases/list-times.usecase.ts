import { TimeGateway } from "@/domain/gateways/time.gateway";
import { UseCase as DefaultUseCase } from "./usecase";

export namespace ListTimesUseCase {
	export type Input = {
		date: string;
	};

	export type Output = string[];

	export class UseCase implements DefaultUseCase<Input, Output> {
		constructor(private timeGateway: TimeGateway) {}

		async execute({ date }: Input): Promise<Output> {
			return await this.timeGateway.findAll(date);
		}
	}
}

