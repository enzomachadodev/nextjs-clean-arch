import { Entity } from "./entity";
import { LocationEntity } from "./location.entity";

export type RegionProps = {
	name: string;
	locations?: LocationEntity[];
};

export class RegionEntity extends Entity<RegionProps> {
	private _locations: LocationEntity[];

	constructor(public readonly props: RegionProps) {
		super(props);
		this._locations = this.props.locations || [];
	}

	get name() {
		return this.props.name;
	}

	get locations() {
		return this._locations;
	}
}

