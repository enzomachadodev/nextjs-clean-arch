import {
	HttpClient,
	HttpStatusCode,
} from "@/application/protocols/http/http-client";
import { UnexpectedError } from "@/domain/errors/unexpected-error";
import { DateGateway } from "@/domain/gateways/date.gateway";

export class DateHttpGateway implements DateGateway {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient
	) {}

	async findAll(): Promise<string[]> {
		const httpResponse = await this.httpClient.request<string[]>({
			url: `${this.url}/scheduling/date`,
			method: "get",
		});
		const httpDates = httpResponse.body || [];
		switch (httpResponse.statusCode) {
			case HttpStatusCode.ok:
				return httpDates;
			default:
				throw new UnexpectedError();
		}
	}
}

