import { object, string, InferType, array } from "yup";

export const createScheduleSchema = object({
	name: string().required("Nome obrigatório"),
	surname: string().required("Sobrenome obrigatório"),
	region: string().required("Selecione uma região"),
	location: string().required("Selecione uma localidade"),
	pokemons: array().of(string()).required(),
	date: string().required("Selecione uma data"),
	time: string().required("Selecione um horário"),
});

export type CreateScheduleFormData = InferType<typeof createScheduleSchema>;

