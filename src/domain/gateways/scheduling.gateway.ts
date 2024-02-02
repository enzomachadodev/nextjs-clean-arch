import { SchedulingEntity } from "../entities/scheduling.entity";

export interface SchedulingGateway {
	get(): SchedulingEntity;
	save(scheduling: SchedulingEntity): void;
}

