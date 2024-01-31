import { Entity } from "./entity";

export type PokemonProps = {
	name: string;
};

export class PokemonEntity extends Entity<PokemonProps> {
	constructor(public readonly props: PokemonProps) {
		super(props);
	}

	get name() {
		return this.props.name;
	}
}

