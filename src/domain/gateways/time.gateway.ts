export interface TimeGateway {
	findAll(date: string): Promise<string[]>;
}

