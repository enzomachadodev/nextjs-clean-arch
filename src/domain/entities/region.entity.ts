import { Entity } from "./entity";

export type RegionProps = {
	name: string;
	locations?: Location[];
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
}

