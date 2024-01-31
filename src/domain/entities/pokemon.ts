import { Entity } from "./entity";

export type PokemonProps = {
	id: number;
	name: string;
};

export class Pokemon extends Entity<PokemonProps> {
	constructor(public readonly props: PokemonProps) {
		super(props);
	}

	get id() {
		return this.props.id;
	}

	get name() {
		return this.props.name;
	}
}

