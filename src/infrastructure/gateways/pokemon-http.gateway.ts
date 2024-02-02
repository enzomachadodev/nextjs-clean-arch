import {
	HttpClient,
	HttpStatusCode,
} from "@/application/protocols/http/http-client";
import { PokemonEntity } from "@/domain/entities/pokemon.entity";
import { UnexpectedError } from "@/domain/errors/unexpected-error";
import { PokemonGateway } from "@/domain/gateways/pokemon.gateway";
import { PokemonResponseModel } from "@/domain/models/pokemon.model";

export class PokemonHttpGateway implements PokemonGateway {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient
	) {}

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
						})
				);
			default:
				throw new UnexpectedError();
		}
	}
}

