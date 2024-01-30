import { MaxWidthWrapper } from "@/presentation/styles/shared";
import styled from "styled-components";

export const AboutContainer = styled.div`
	width: full;
	min-height: 100vh;
	padding-top: 100px;
`;

export const AboutContentWrapper = styled(MaxWidthWrapper)`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 32px;
	padding-bottom: 64px;
`;

export const AboutTextWrapper = styled.div`
	width: 100%;
	max-width: 410px;
	text-align: start;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const AboutTitle = styled.h2`
	font-size: var(--text-2xl);
	font-weight: var(--font-semibold);
`;

export const AboutSubtitle = styled.h3`
	font-size: var(--text-xl);
	font-weight: var(--font-medium);
`;

export const AboutParagraph = styled.h2`
	font-size: var(--text-lg);
	font-weight: var(--font-medium);
`;

