import { Entity } from "./entity";
import { PokemonEntity } from "./pokemon.entity";

interface SchedulingProps {
	pokemons: PokemonEntity[];
}

export class SchedulingEntity extends Entity<SchedulingProps> {
	private _pokemons: PokemonEntity[];
	private taxValue: number = 3 / 100;

	constructor(public readonly props: SchedulingProps) {
		super(props);
		this._pokemons = this.props.pokemons || [];
	}

	get pokemons() {
		return this._pokemons;
	}

	get tax() {
		return this.calculateHighGenTax();
	}

	get subtotal() {
		return this.cauculateSubtotal();
	}

	get total(): number {
		return this.cauculateSubtotal() + this.calculateHighGenTax();
	}

	removeLastPokemon() {
		if (this._pokemons.length > 0) {
			this._pokemons.pop();
		}
	}

	getNumPokemons() {
		return this._pokemons.length;
	}

	addPokemon(pokemon: PokemonEntity): void {
		this._pokemons.push(pokemon);
	}

	cauculateSubtotal() {
		return this._pokemons.reduce((acc, pokemon) => acc + pokemon.price, 0);
	}

	calculateHighGenTax(): number {
		if (this._pokemons.length === 0) return 0;
		const highestGen = Math.max(
			...this._pokemons.map((pokemon) => pokemon.generation)
		);
		const taxRate = Math.min(highestGen * this.taxValue, 0.3);
		return this.cauculateSubtotal() * taxRate;
	}

	clear() {
		this._pokemons = [];
	}
}

