import { LocationOutput } from "@/application/dtos/location-output";

export type SingleRegionResponseModel = {
	name: string;
	locations: LocationOutput[];
};

