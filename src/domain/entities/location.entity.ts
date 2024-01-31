import { Entity } from "./entity";

export type LocationProps = {
	name: string;
};

export class LocationEntity extends Entity<LocationProps> {
	constructor(public readonly props: LocationProps) {
		super(props);
	}

	get name() {
		return this.props.name;
	}
}

