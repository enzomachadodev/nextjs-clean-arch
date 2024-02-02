import { UseCase as DefaultUseCase } from "./usecase";
import { SchedulingGateway } from "@/domain/gateways/scheduling.gateway";
import { SchedulingEntity } from "@/domain/entities/scheduling.entity";

export namespace ClearSchedulingUseCase {
	export type Input = null;

	export type Output = SchedulingEntity;

	export class UseCase implements DefaultUseCase<Input, Output> {
		constructor(private schedulingGateway: SchedulingGateway) {}

		async execute(): Promise<Output> {
			const scheduling = this.schedulingGateway.get();
			scheduling.clear();
			this.schedulingGateway.save(scheduling);
			return scheduling;
		}
	}
}

