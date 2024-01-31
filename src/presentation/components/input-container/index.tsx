import * as S from "./styles";

interface InputContainerProps {
	children: React.ReactNode;
}

export const InputContainer: React.FC<InputContainerProps> = ({ children }) => (
	<S.InputContainer>{children}</S.InputContainer>
);

