import {
	HttpClient,
	HttpStatusCode,
} from "@/application/protocols/http/http-client";
import { LocationEntity } from "@/domain/entities/location.entity";
import { RegionEntity } from "@/domain/entities/region.entity";
import { UnexpectedError } from "@/domain/errors/unexpected-error";
import { RegionGateway } from "@/domain/gateways/region.gateway";
import { RegionResponseModel } from "@/domain/models/region.model";
import { SingleRegionResponseModel } from "@/domain/models/single-region.model";

export class RegionHttpGateway implements RegionGateway {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient
	) {}

	async findByName(name: string): Promise<RegionEntity> {
		const httpResponse =
			await this.httpClient.request<SingleRegionResponseModel>({
				url: `${this.url}/region/${name}`,
				method: "get",
			});
		const httpRegion = httpResponse.body;
		switch (httpResponse.statusCode) {
			case HttpStatusCode.ok:
				return new RegionEntity({
					name: httpRegion.name,
					locations: httpRegion.locations.map(
						(location) =>
							new LocationEntity({
								name: location.name,
							})
					),
				});
			default:
				throw new UnexpectedError();
		}
	}

	async findAll(): Promise<RegionEntity[]> {
		const httpResponse = await this.httpClient.request<RegionResponseModel>({
			url: `${this.url}/region`,
			method: "get",
		});
		const httpRegions = httpResponse.body.results || [];
		switch (httpResponse.statusCode) {
			case HttpStatusCode.ok:
				return httpRegions.map(
					(region) =>
						new RegionEntity({
							name: region.name,
							locations: [],
						})
				);
			default:
				throw new UnexpectedError();
		}
	}
}

