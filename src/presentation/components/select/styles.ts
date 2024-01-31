import styled, { css, keyframes } from "styled-components";

const disabledStyle = css`
	opacity: 0.8;
	pointer-events: none;
	cursor: not-allowed;
	background-color: var(--gray-0);
	color: var(--gray-3);
`;

export const SelectContainer = styled.div`
	position: relative;
	z-index: 50;
	min-width: 265px;
`;

export const SelectTrigger = styled.div<{
	open?: string;
	error?: string;
	disabled?: string;
}>`
	height: 45px;
	width: 100%;
	background-color: var(--white);
	border: 1px solid
		${({ error }) => (error ? "var(--primary)" : "var(--gray-2)")};
	border-radius: 8px;
	font-size: var(--text-lg);
	font-weight: var(--font-medium);
	color: var(--gray-3);
	padding: 0 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	${({ disabled }) => (disabled ? disabledStyle : null)}

	.select-value {
		color: var(--gray-4);
	}

	.select-placeholder {
		color: var(--gray-3);
	}

	.chevron {
		transition: transform 0.2s ease-in-out;
		transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
	}
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
		top: 110%;
  }
  to {
    opacity: 1;
		top: 88%;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
		top: 88%;
  }
  to {
    opacity: 0;
		top: 110%;
  }
`;

export const OptionsContainer = styled.div<{ open?: string }>`
	position: absolute;
	list-style: none;
	top: 88%;
	left: 0;
	width: 100%;
	max-height: 200px;
	overflow-y: auto;
	border-radius: 0 0 8px 8px;
	background-color: var(--white);
	border: 1px solid var(--gray-2);
	display: ${({ open }) => (open ? "block" : "none")};
	animation: ${({ open }) => (open ? fadeIn : fadeOut)} 0.2s ease-in-out;

	.no-options-message {
		padding: 16px;
		text-align: center;
		color: var(--gray-3);
		font-size: var(--text-lg);
		font-weight: var(--font-medium);
	}
`;

export const OptionItem = styled.div<{ selected?: string }>`
	width: 100%;
	font-size: var(--text-lg);
	font-weight: var(--font-medium);
	color: var(--gray-3);
	padding: 8px 16px;
	background-color: ${({ selected }) => (selected ? "var(--gray-0)" : null)};

	&:hover {
		background-color: var(--gray-0);
	}
`;

export const SearchContainer = styled.div`
	display: flex;
	align-items: center;

	.search-icon {
		transform: scaleX(-1);
		margin: 4px 16px;
		opacity: 0.5;
	}

	.search-input {
		width: 100%;
		padding: 10px 0;
		font-size: var(--text-lg);
		font-weight: var(--font-medium);
		border: none;
		outline: none;
	}

	.search-input::placeholder {
		color: var(--gray-3);
	}
`;

