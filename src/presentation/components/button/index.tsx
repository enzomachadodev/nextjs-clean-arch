import { forwardRef } from "react";
import * as S from "./styles";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "ghost" | "outline";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, type = "button", ...props }, ref) => {
		return (
			<S.Button
				ref={ref}
				type={type}
				{...props}
			>
				{children}
			</S.Button>
		);
	}
);

Button.displayName = "Button";

