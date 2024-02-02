import { useContext } from "react";
import { ModalContext } from "../contexts/modal-context";

export const useSuccessModal = () => {
	const { successOpen, setSuccessOpen, successMessage, setSuccessMessage } =
		useContext(ModalContext);

	return {
		isOpen: successOpen,
		message: successMessage,
		onOpen: (message?: string) => {
			setSuccessMessage(message || "Operação concluída com sucesso!");
			setSuccessOpen(true);
		},
		onClose: () => {
			setSuccessMessage("");
			setSuccessOpen(false);
		},
	};
};

