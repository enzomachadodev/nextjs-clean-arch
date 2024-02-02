import { injectable } from "inversify";
import { SchedulingEntity } from "@/domain/entities/scheduling.entity";
import { SchedulingGateway } from "@/domain/gateways/scheduling.gateway";
import { PokemonEntity } from "@/domain/entities/pokemon.entity";

@injectable()
export class SchedulingLocalGateway implements SchedulingGateway {
	private readonly SCHEDULING_KEY = "pokemon-center-scheduling";
	save(scheduling: SchedulingEntity): void {
		localStorage.setItem(
			this.SCHEDULING_KEY,
			JSON.stringify(scheduling.pokemons)
		);
	}

	get(): SchedulingEntity {
		const pokemons = JSON.parse(
			localStorage.getItem(this.SCHEDULING_KEY) || "[]"
		);

		return new SchedulingEntity({
			pokemons: pokemons.map(
				(pokemon: PokemonEntity) =>
					new PokemonEntity({
						generation: pokemon.generation,
						name: pokemon.name,
					})
			),
		});
	}
}

