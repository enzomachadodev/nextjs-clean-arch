import { useSuccessModal } from "@/presentation/hooks/use-success-modal";
import { Modal } from "../modal";

export const SuccessModal: React.FC = () => {
	const { isOpen, message, onClose } = useSuccessModal();

	return (
		<Modal
			isOpen={isOpen}
			buttonLabel="Fazer novo agendamento"
			description={message}
			iconSrc="/check.svg"
			title="Consulta Agendada"
			onClick={onClose}
		/>
	);
};

