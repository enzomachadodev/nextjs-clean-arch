import { Entity } from "./entity";

export type RegionProps = {
	id?: number;
	name: string;
	locations?: Location[];
};

export class Region extends Entity<RegionProps> {
	constructor(public readonly props: RegionProps) {
		super(props);
	}

	get id() {
		return this.props.id;
	}

	get name() {
		return this.props.name;
	}

	get locations() {
		return this.props.locations;
	}
}

