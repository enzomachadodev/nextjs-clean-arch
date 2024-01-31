import styled, { css } from "styled-components";
import { ButtonProps } from ".";

const defaultStyles = css`
	background-color: var(--primary);
	font-weight: var(--font-bold);
	color: var(--white);

	&:hover {
		opacity: 0.8;
	}
`;

const ghostStyles = css`
	font-weight: var(--font-normal);
	background: none;

	&:hover {
		background-color: var(--gray-0);
	}
`;

const outlineStyles = css`
	font-weight: var(--font-bold);
	font-size: var(--text-md);
	background: none;
	border: 1px solid var(--black);

	&:hover {
		background-color: var(--gray-0);
	}
`;

export const Button = styled.button<ButtonProps>`
	height: 45px;
	width: fit-content;
	padding: 16px 20px;
	border-radius: 30px;
	display: flex;
	gap: 10px;
	align-items: center;
	white-space: nowrap;
	font-size: var(--text-lg);
	transition: 0.3s ease;
	border: none;
	cursor: pointer;

	${({ variant }) =>
		variant === "ghost"
			? ghostStyles
			: variant === "outline"
			? outlineStyles
			: defaultStyles}
`;

