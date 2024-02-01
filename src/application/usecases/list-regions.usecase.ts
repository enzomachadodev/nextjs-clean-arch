import { RegionEntity } from "@/domain/entities/region.entity";
import { RegionGateway } from "@/domain/gateways/region.gateway";
import { UseCase as DefaultUseCase } from "@/domain/usecases/usecase";
import { RegionOutput, RegionOutputMapper } from "../dtos/region-output";

export namespace ListRegionsUseCase {
	export type Input = null;

	export type Output = RegionOutput[];

	export class UseCase implements DefaultUseCase<Input, Output> {
		constructor(private regionGateway: RegionGateway) {}

		async execute(): Promise<Output> {
			const result = await this.regionGateway.findAll();
			return this.toOutput(result);
		}

		private toOutput(result: RegionEntity[]): Output {
			return result.map((item) => RegionOutputMapper.toOutput(item));
		}
	}
}

