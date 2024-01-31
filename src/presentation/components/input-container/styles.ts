import styled from "styled-components";

export const InputContainer = styled.div`
	min-width: 265px;
	display: flex;
	flex-direction: column;

	.input-label {
		font-size: var(--text-md);
		font-weight: var(--font-bold);
		margin-bottom: 10px;
	}

	.input-error {
		font-size: var(--text-sm);
		font-weight: var(--font-normal);
		color: var(--primary);
		margin-top: 5px;
		margin-left: 5px;
	}
`;

