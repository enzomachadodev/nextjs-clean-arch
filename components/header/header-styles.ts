import styled from "styled-components";
import { MaxWidthWrapper } from "../max-width-wrapper/max-width-wrapper-styles";

export const Header = styled.header`
	width: 100%;
	height: 100px;
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	background-color: var(--white);
`;

export const Container = styled(MaxWidthWrapper)`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	gap: 16px;
`;

