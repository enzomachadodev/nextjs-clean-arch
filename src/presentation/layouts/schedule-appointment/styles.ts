import styled from "styled-components";
import { MaxWidthWrapper } from "@/presentation/styles/shared";

export const Container = styled.div`
	width: full;
	min-height: 100vh;
	padding-top: 100px;
`;

export const ContentWrapper = styled(MaxWidthWrapper)`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 32px;
	padding-bottom: 64px;
`;

