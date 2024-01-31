import { LocationEntity } from "../entities/location.entity";
import { GatewayInterface } from "./gateway-contracts";

export interface LocationGateway extends GatewayInterface<LocationEntity> {}

