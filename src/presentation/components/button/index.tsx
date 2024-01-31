import { forwardRef } from "react";
import * as S from "./styles";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "ghost";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, ...props }, ref) => {
		return (
			<S.Button
				ref={ref}
				{...props}
			>
				{children}
			</S.Button>
		);
	}
);

Button.displayName = "Button";

