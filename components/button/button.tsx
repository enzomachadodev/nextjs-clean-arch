import * as S from "./button-styles";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "ghost";
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	return <S.Button {...props}>{children}</S.Button>;
};

