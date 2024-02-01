import { Entity } from "./entity";
import { LocationEntity } from "./location.entity";

export type RegionProps = {
	name: string;
	locations?: LocationEntity[];
};

export class RegionEntity extends Entity<RegionProps> {
	constructor(public readonly props: RegionProps) {
		super(props);
	}

	get name() {
		return this.props.name;
	}

	get locations() {
		return this.props.locations;
	}

	toJSON(): Required<RegionProps> {
		return {
			...this.props,
			locations: this.locations
				? this.locations.map((location) => location.toJSON())
				: undefined,
		} as Required<RegionProps>;
	}
}

