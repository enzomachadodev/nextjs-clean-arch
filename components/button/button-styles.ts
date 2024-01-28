import styled, { css } from "styled-components";
import { ButtonProps } from "./button";

const defaultStyles = css`
	background-color: var(--primary);
	font-weight: var(--font-bold);
	color: var(--white);

	&:hover {
		opacity: 0.9;
	}
`;

const ghostStyles = css`
	font-weight: var(--font-normal);
	background: none;

	&:hover {
		text-decoration: underline;
		background-color: var(--gray-0);
	}
`;

export const Button = styled.button<ButtonProps>`
	height: 45px;
	padding: 16px 20px;
	border-radius: 30px;
	display: flex;
	align-items: center;
	white-space: nowrap;
	font-size: var(--text-lg);
	transition: 0.3s ease;
	border: none;
	cursor: pointer;

	${({ variant }) => (variant === "ghost" ? ghostStyles : defaultStyles)}
`;

