import { Entity } from "./entity";

export type LocationProps = {
	name: string;
};

export class Location extends Entity<LocationProps> {
	constructor(public readonly props: LocationProps) {
		super(props);
	}

	get name() {
		return this.props.name;
	}
}

