import { useQuery } from "@tanstack/react-query";
import { getRegionByName } from "../actions/get-region-by-name";
import { capitalizeWords } from "../formatters/capitalize-words";

export const useLocationOptions = (name: string) =>
	useQuery({
		queryKey: ["region-by-name", name],
		queryFn: async () => getRegionByName(name),
		enabled: !!name,
		select(data) {
			return data.locations.map(({ name }) => ({
				label: capitalizeWords(name),
				value: name,
			}));
		},
	});

