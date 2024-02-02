import axios, { AxiosError, AxiosResponse } from "axios";
import { injectable } from "inversify";
import {
	HttpClient,
	HttpRequest,
	HttpResponse,
} from "@/application/protocols/http/http-client";

@injectable()
export class AxiosHttpClient implements HttpClient {
	async request<T>(data: HttpRequest): Promise<HttpResponse<T>> {
		try {
			const axiosResponse = await axios.request({
				url: data.url,
				method: data.method,
				data: data.body,
				headers: data.headers,
			});
			return {
				statusCode: axiosResponse.status,
				body: axiosResponse.data,
			};
		} catch (error: any) {
			return {
				statusCode: error.response?.status || 500,
				body: error.response?.data || ({} as T),
			};
		}
	}
}

