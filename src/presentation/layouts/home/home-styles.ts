import styled from "styled-components";

export const HomeContainer = styled.div`
	width: full;
	height: calc(100vh - 175px);
	position: relative;
	margin-top: 100px;

	h1 {
		font-size: var(--text-3xl);
		font-weight: var(--font-bold);
		text-align: center;
		max-width: 510px;
		color: var(--white);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

