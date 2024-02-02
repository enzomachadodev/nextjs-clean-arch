import {
	HttpClient,
	HttpStatusCode,
} from "@/application/protocols/http/http-client";
import { UnexpectedError } from "@/domain/errors/unexpected-error";
import { TimeGateway } from "@/domain/gateways/time.gateway";

export class TimeHttpGateway implements TimeGateway {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient
	) {}

	async findAll(date: string): Promise<string[]> {
		const httpResponse = await this.httpClient.request<string[]>({
			url: `${this.url}/scheduling/time`,
			method: "post",
			body: { date },
		});
		const httpTimes = httpResponse.body || [];
		switch (httpResponse.statusCode) {
			case HttpStatusCode.ok:
				return httpTimes;
			default:
				throw new UnexpectedError();
		}
	}
}

