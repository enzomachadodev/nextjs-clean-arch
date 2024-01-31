import styled, { css } from "styled-components";
import { InputProps } from ".";

const errorStyles = css`
	border-color: var(--primary);
`;

export const Input = styled.input<{ error: boolean }>`
	height: 45px;
	min-width: 265px;
	background-color: var(--white);
	border: 1px solid var(--gray-2);
	border-radius: 8px;
	font-size: var(--text-lg);
	font-weight: var(--font-medium);
	padding: 0 10px;

	&:placeholder {
		color: var(--gray-3);
	}

	&:focus {
		outline: 1px solid
			${({ error }) => (error ? "var(--primary)" : "var(--gray-3)")};
	}

	${({ error }) => (error ? errorStyles : null)}
`;

