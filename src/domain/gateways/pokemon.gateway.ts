import { PokemonEntity } from "../entities/pokemon.entity";
import { GatewayInterface } from "./gateway-contracts";

export interface PokemonGateway extends GatewayInterface<PokemonEntity> {
	findByName(name: string): Promise<PokemonEntity>;
}

