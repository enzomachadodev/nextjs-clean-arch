import { Entity } from "./entity";

export type PokemonProps = {
	name: string;
	generation: number;
};

export class PokemonEntity extends Entity<PokemonProps> {
	public readonly _price: number = 7000;

	constructor(public readonly props: PokemonProps) {
		super(props);
		this.props.generation = this.props.generation ?? 0;
	}

	get price() {
		return this._price;
	}

	get name() {
		return this.props.name;
	}

	get generation() {
		return this.props.generation;
	}

	toJSON(): Required<{ price: number } & PokemonProps> {
		return {
			...this.props,
			price: this._price,
		} as Required<{ price: number } & PokemonProps>;
	}
}

