import { useContext } from "react";
import { ModalContext } from "../contexts/modal-context";

export const useErrorModal = () => {
	const { errorOpen, setErrorOpen, errorMessage, setErrorMessage } =
		useContext(ModalContext);

	return {
		isOpen: errorOpen,
		message: errorMessage,
		onOpen: (message?: string) => {
			setErrorMessage(
				message || "Ocorreu um erro inesperado. Por favor, tente novamente."
			);
			setErrorOpen(true);
		},
		onClose: () => {
			setErrorMessage("");
			setErrorOpen(false);
		},
	};
};

