import * as React from "react";
import * as S from "./input-styles";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<S.Input
				type={type}
				ref={ref}
				{...props}
			/>
		);
	}
);

Input.displayName = "Input";

