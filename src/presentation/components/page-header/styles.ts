import { MaxWidthWrapper } from "@/presentation/styles/shared";
import styled from "styled-components";

export const PageHeaderContainer = styled.div`
	width: 100%;
	height: 190px;
	background-color: var(--primary);
	display: flex;
	align-items: center;
`;

export const PageHeaderWrapper = styled(MaxWidthWrapper)`
	padding-right: 2.5rem;
	padding-left: 2.5rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const PageHeaderPaths = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: var(--white);
	font-weight: var(--font-bold);
	font-size: var(--text-md);
	text-transform: capitalize;

	.path-link:hover {
		text-decoration: underline;
	}
`;

export const PageHeaderHeading = styled.h1`
	font-size: var(--text-3xl);
	font-weight: var(--font-bold);
	color: var(--white);
	text-transform: capitalize;
`;

export const PageHeaderSubtitle = styled.p`
	font-size: var(--text-lg);
	font-weight: var(--font-normal);
	color: var(--gray-1);
`;

