import { Entity } from "./entity";
import { LocationEntity } from "./location.entity";

export type RegionProps = {
	name: string;
	locations?: LocationEntity[];
};

export class RegionEntity extends Entity<RegionProps> {
	constructor(public readonly props: RegionProps) {
		super(props);
		this.props.locations = this.props.locations ?? [];
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
			locations: this.props.locations?.map((locations) => locations.toJSON()),
		} as Required<RegionProps>;
	}
}

