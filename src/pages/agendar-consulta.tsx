import { GetServerSideProps, NextPage } from "next";
import { ScheduleAppointmentLayout } from "@/presentation/layouts/schedule-appointment";
import { getDates } from "@/presentation/actions/get-dates";
import { getPokemons } from "@/presentation/actions/get-pokemons";
import { getRegions } from "@/presentation/actions/get-regions";
import { Option } from "@/presentation/components/select";
import { capitalizeWords } from "@/presentation/formatters/capitalize-words";

interface ScheduleAppointmentProps {
	dates: Option[];
	pokemons: Option[];
	regions: Option[];
}

const ScheduleAppointment: NextPage<ScheduleAppointmentProps> = ({
	...props
}) => {
	return <ScheduleAppointmentLayout {...props} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const dates = await getDates();
		const pokemons = await getPokemons();
		const regions = await getRegions();

		return {
			props: {
				dates: dates.map((item) => ({
					label: item,
					value: item,
				})),
				pokemons: pokemons.map(({ name }) => {
					return {
						label: capitalizeWords(name),
						value: name,
					};
				}),
				regions: regions.map(({ name }) => {
					return {
						label: capitalizeWords(name),
						value: name,
					};
				}),
			},
		};
	} catch (error) {
		console.error("Erro durante a execução de getServerSideProps:", error);
		return {
			props: {},
		};
	}
};

export default ScheduleAppointment;

