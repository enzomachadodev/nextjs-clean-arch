import { RegionEntity } from "../entities/region.entity";
import { GatewayInterface } from "./gateway-contracts";

export interface RegionGateway extends GatewayInterface<RegionEntity> {
	findByName(name: string): Promise<RegionEntity>;
}

