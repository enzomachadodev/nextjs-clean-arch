import { createContext, useState } from "react";

interface ModalContextData {
	successOpen: boolean;
	setSuccessOpen: React.Dispatch<React.SetStateAction<boolean>>;
	successMessage: string;
	setSuccessMessage: React.Dispatch<React.SetStateAction<string>>;
	errorOpen: boolean;
	setErrorOpen: React.Dispatch<React.SetStateAction<boolean>>;
	errorMessage: string;
	setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

interface ModalProviderProps {
	children: React.ReactNode;
}

export const ModalContext = createContext({} as ModalContextData);

export const ModalProvider = ({ children }: ModalProviderProps) => {
	const [successOpen, setSuccessOpen] = useState<boolean>(false);
	const [successMessage, setSuccessMessage] = useState<string>("");
	const [errorOpen, setErrorOpen] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>("");

	return (
		<ModalContext.Provider
			value={{
				errorOpen,
				setErrorOpen,
				errorMessage,
				setErrorMessage,
				setSuccessOpen,
				successOpen,
				successMessage,
				setSuccessMessage,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

