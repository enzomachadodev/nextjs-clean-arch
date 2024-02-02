import { useQuery } from "@tanstack/react-query";
import { getTimes } from "../actions/get-times";

export const useTimeOptions = (date: string) =>
	useQuery({
		queryKey: ["times", date],
		queryFn: async () => getTimes(date),
		enabled: !!date,

		select(data) {
			return data.map((time) => ({
				label: time,
				value: time,
			}));
		},
	});

