import {
	HttpClient,
	HttpStatusCode,
} from "@/application/protocols/http/http-client";
import { PokemonEntity } from "@/domain/entities/pokemon.entity";
import { UnexpectedError } from "@/domain/errors/unexpected-error";
import { PokemonGateway } from "@/domain/gateways/pokemon.gateway";
import { PokemonResponseModel } from "@/domain/models/pokemon.model";
import { SinglePokemonResponseModel } from "@/domain/models/single-pokemon.model";

export class PokemonHttpGateway implements PokemonGateway {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient
	) {}

	async findByName(name: string): Promise<PokemonEntity> {
		const httpResponse =
			await this.httpClient.request<SinglePokemonResponseModel>({
				url: `${this.url}/pokemon/${name}`,
				method: "get",
			});
		const httpPokemon = httpResponse.body;
		switch (httpResponse.statusCode) {
			case HttpStatusCode.ok:
				return new PokemonEntity({
					name: httpPokemon.name,
					generation: Math.ceil(httpPokemon.id / 151),
				});
			default:
				throw new UnexpectedError();
		}
	}

	async findAll(): Promise<PokemonEntity[]> {
		const httpResponse = await this.httpClient.request<PokemonResponseModel>({
			url: `${this.url}/pokemon`,
			method: "get",
		});
		const httpPokemons = httpResponse.body.results || [];
		switch (httpResponse.statusCode) {
			case HttpStatusCode.ok:
				return httpPokemons.map(
					(pokemon) =>
						new PokemonEntity({
							name: pokemon.name,
							generation: 0,
						})
				);
			default:
				throw new UnexpectedError();
		}
	}
}

