import "reflect-metadata";
import { Container } from "inversify";
import { env } from "./config/env-config";
import { EnvConfig } from "./config/env-config.interface";
import { AxiosHttpClient } from "./http/axios-http-client";
import { DateHttpGateway } from "./gateways/date-http.gateway";
import { TimeHttpGateway } from "./gateways/time-http.gateway";
import { PokemonHttpGateway } from "./gateways/pokemon-http.gateway";
import { RegionHttpGateway } from "./gateways/region-http.gateway";
import { ListDatesUseCase } from "@/application/usecases/list-dates.usecase";
import { ListTimesUseCase } from "@/application/usecases/list-times.usecase";
import { ListPokemonsUseCase } from "@/application/usecases/list-pokemons.usecase";
import { ListRegionsUseCase } from "@/application/usecases/list-regions.usecase";
import { GetRegionUseCase } from "@/application/usecases/get-region.usecase";
import { AddPokemonInSchedulingUseCase } from "@/application/usecases/add-pokemon-in-scheduling.usecase";
import { RemoveLastPokemonFromSchedulingUseCase } from "@/application/usecases/remove-last-pokemon-from-scheduling.usecase";
import { SchedulingLocalGateway } from "./gateways/schedule-local.gateway";
import { GetPokemonUseCase } from "@/application/usecases/get-pokemon.usecase";
import { ClearSchedulingUseCase } from "@/application/usecases/clear-scheduling.usecase";

export const Registry = {
	EnvConfig: Symbol.for("EnvConfig"),

	HttpClient: Symbol.for("HttpClient"),

	DateGateway: Symbol.for("DateGateway"),
	TimeGateway: Symbol.for("TimeGateway"),
	PokemonGateway: Symbol.for("PokemonGateway"),
	RegionGateway: Symbol.for("RegionGateway"),
	SchedulingGateway: Symbol.for("SchedulingGateway"),

	ListDatesUseCase: Symbol.for("ListDatesUseCase"),
	ListTimesUseCase: Symbol.for("ListTimesUseCase"),
	ListPokemonsUseCase: Symbol.for("ListPokemonsUseCase"),
	ListRegionsUseCase: Symbol.for("ListRegionsUseCase"),
	GetRegionUseCase: Symbol.for("GetRegionUseCase"),
	GetPokemonUseCase: Symbol.for("GetPokemonUseCase"),
	AddPokemonInSchedulingUseCase: Symbol.for("AddPokemonInSchedulingUseCase"),
	RemoveLastPokemonFromSchedulingUseCase: Symbol.for(
		"RemoveLastPokemonFromSchedulingUseCase"
	),
	ClearSchedulingUseCase: Symbol.for("ClearSchedulingUseCase"),
};

export const container = new Container();

container.bind(Registry.EnvConfig).toConstantValue(env);

container.bind(Registry.HttpClient).to(AxiosHttpClient);

container.bind(Registry.DateGateway).toDynamicValue((context) => {
	return new DateHttpGateway(
		context.container.get<EnvConfig>(
			Registry.EnvConfig
		).NEXT_PUBLIC_LOCAL_API_URL,
		context.container.get(Registry.HttpClient)
	);
});
container.bind(Registry.TimeGateway).toDynamicValue((context) => {
	return new TimeHttpGateway(
		context.container.get<EnvConfig>(
			Registry.EnvConfig
		).NEXT_PUBLIC_LOCAL_API_URL,
		context.container.get(Registry.HttpClient)
	);
});
container.bind(Registry.PokemonGateway).toDynamicValue((context) => {
	return new PokemonHttpGateway(
		context.container.get<EnvConfig>(
			Registry.EnvConfig
		).NEXT_PUBLIC_POKE_API_URL,
		context.container.get(Registry.HttpClient)
	);
});
container.bind(Registry.RegionGateway).toDynamicValue((context) => {
	return new RegionHttpGateway(
		context.container.get<EnvConfig>(
			Registry.EnvConfig
		).NEXT_PUBLIC_POKE_API_URL,
		context.container.get(Registry.HttpClient)
	);
});

container.bind(Registry.SchedulingGateway).to(SchedulingLocalGateway);

container.bind(Registry.ListDatesUseCase).toDynamicValue((context) => {
	return new ListDatesUseCase.UseCase(
		context.container.get(Registry.DateGateway)
	);
});
container.bind(Registry.ListTimesUseCase).toDynamicValue((context) => {
	return new ListTimesUseCase.UseCase(
		context.container.get(Registry.TimeGateway)
	);
});
container.bind(Registry.ListPokemonsUseCase).toDynamicValue((context) => {
	return new ListPokemonsUseCase.UseCase(
		context.container.get(Registry.PokemonGateway)
	);
});
container.bind(Registry.ListRegionsUseCase).toDynamicValue((context) => {
	return new ListRegionsUseCase.UseCase(
		context.container.get(Registry.RegionGateway)
	);
});
container.bind(Registry.GetRegionUseCase).toDynamicValue((context) => {
	return new GetRegionUseCase.UseCase(
		context.container.get(Registry.RegionGateway)
	);
});
container.bind(Registry.GetPokemonUseCase).toDynamicValue((context) => {
	return new GetPokemonUseCase.UseCase(
		context.container.get(Registry.PokemonGateway)
	);
});
container
	.bind(Registry.AddPokemonInSchedulingUseCase)
	.toDynamicValue((context) => {
		return new AddPokemonInSchedulingUseCase.UseCase(
			context.container.get(Registry.SchedulingGateway)
		);
	});
container
	.bind(Registry.RemoveLastPokemonFromSchedulingUseCase)
	.toDynamicValue((context) => {
		return new RemoveLastPokemonFromSchedulingUseCase.UseCase(
			context.container.get(Registry.SchedulingGateway)
		);
	});
container.bind(Registry.ClearSchedulingUseCase).toDynamicValue((context) => {
	return new ClearSchedulingUseCase.UseCase(
		context.container.get(Registry.SchedulingGateway)
	);
});

