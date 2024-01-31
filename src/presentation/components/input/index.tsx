import { InputContainer } from "../input-container";
import * as S from "./styles";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: boolean;
	errorMessage?: string;
}

export const Input: React.FC<InputProps> = ({
	label,
	error = false,
	errorMessage,
	...props
}) => {
	return (
		<InputContainer>
			{label && <label className="input-label">{label}</label>}
			<S.Input
				error={error}
				{...props}
			/>
			{error && errorMessage && <p className="input-error">{errorMessage}</p>}
		</InputContainer>
	);
};

