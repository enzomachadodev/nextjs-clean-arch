import styled from "styled-components";

export const LogoContainer = styled.a<{ expanded?: string }>`
	height: 55px;
	width: ${({ expanded }) => (expanded ? "225px" : "55px").toString()};
	position: relative;
	overflow: hidden;
	transition: 0.5s;
	display: flex;
	align-items: center;
	gap: 16px;
	padding: 10px;
	border-radius: 30px;
	background-color: var(--primary);

	&:hover {
		width: 225px;
	}

	&:hover .title {
		display: block;
	}

	.title {
		white-space: nowrap;
		font-size: var(--text-xl);
		font-weight: var(--font-bold);
		color: var(--white);
		width: 100%;
	}
`;

