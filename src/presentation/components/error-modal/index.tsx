import { useErrorModal } from "@/presentation/hooks/use-error-modal";
import { Modal } from "../modal";

export const ErrorModal: React.FC = () => {
	const { isOpen, message, onClose } = useErrorModal();

	return (
		<Modal
			isOpen={isOpen}
			buttonLabel="Fazer novo agendamento"
			description={message}
			iconSrc="/warning.svg"
			title="Houve um problema no agendamento"
			onClick={onClose}
		/>
	);
};

