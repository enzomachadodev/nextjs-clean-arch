import { RegionEntity } from "@/domain/entities/region.entity";
import { LocationOutput } from "./location-output";

export type RegionOutput = {
	name: string;
	locations?: LocationOutput[];
};

export class RegionOutputMapper {
	static toOutput(entity: RegionEntity): RegionOutput {
		return entity.toJSON();
	}
}

