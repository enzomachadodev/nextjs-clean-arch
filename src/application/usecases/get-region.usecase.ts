import { RegionGateway } from "@/domain/gateways/region.gateway";
import { UseCase as DefaultUseCase } from "./usecase";
import { RegionOutput, RegionOutputMapper } from "../dtos/region-output";

export namespace GetRegionUseCase {
	export type Input = {
		name: string;
	};

	export type Output = RegionOutput;

	export class UseCase implements DefaultUseCase<Input, Output> {
		constructor(private regionGateway: RegionGateway) {}

		async execute(input: Input): Promise<Output> {
			const entity = await this.regionGateway.findByName(input.name);
			return RegionOutputMapper.toOutput(entity);
		}
	}
}

