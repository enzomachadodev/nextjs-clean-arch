import * as S from "./styles";
import { PageHeader } from "@/presentation/components/page-header";
import { ScheduleAppointmentForm } from "@/presentation/components/schedule-appointment-form";

export const ScheduleAppointmentLayout: React.FC = () => {
	return (
		<S.Container>
			<PageHeader subtitle="Recupere seus pokémons em 5 segundos" />
			<S.ContentWrapper>
				<ScheduleAppointmentForm />
			</S.ContentWrapper>
		</S.Container>
	);
};

