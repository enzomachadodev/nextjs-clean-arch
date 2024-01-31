import { Entity } from "../entities/entity";

export interface GatewayInterface<E extends Entity> {
	findAll(): Promise<E[]>;
}
