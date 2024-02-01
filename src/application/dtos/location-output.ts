import { LocationEntity } from "@/domain/entities/location.entity";

export type LocationOutput = {
	name: string;
};

export class LocationOutputMapper {
	static toOutput(entity: LocationEntity): LocationOutput {
		return entity.toJSON();
	}
}

