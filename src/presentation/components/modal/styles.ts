import styled, { keyframes } from "styled-components";

const overlayfadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const overlayfadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const contentfadeIn = keyframes`
  from {
    opacity: 0;
    top: 60%;
  }
  to {
    top:50%;
    opacity: 1;
  }
`;

const contentfadeOut = keyframes`
  from {
    top:50%;
    opacity: 1;
  }
  to {
    opacity: 0;
    top: 60%;
  }
`;

export const ModalOverlay = styled.div<{ open?: string }>`
	position: fixed;
	z-index: 200;
	width: full;
	height: 100vh;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(29, 29, 29, 0.1);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(3px);
	-webkit-backdrop-filter: blur(5px);
	padding: 1rem;
	display: ${({ open }) => (open ? "block" : "none")};
	animation: ${({ open }) => (open ? overlayfadeIn : overlayfadeOut)} 0.2s
		ease-in-out;
`;

export const ModalContent = styled.div<{ open?: string }>`
	border: 1px solid var(--primary);
	border-radius: 15px;
	background-color: #fefefa;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	max-width: 490px;
	padding: 2rem 1rem;
	gap: 1rem;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	animation-delay: 0.3s;
	display: ${({ open }) => (open ? "flex" : "none")};
	animation: ${({ open }) => (open ? contentfadeIn : contentfadeOut)} 0.2s
		ease-in-out;
`;

export const ModalTitle = styled.h3`
	font-weight: var(--font-bold);
	font-size: var(--text-2xl);
	width: 100%;
	text-align: center;
`;

export const ModalDescription = styled.h3`
	font-weight: var(--font-normal);
	font-size: var(--text-lg);
	color: var(--gray-3);
	width: 100%;
	text-align: center;
`;

