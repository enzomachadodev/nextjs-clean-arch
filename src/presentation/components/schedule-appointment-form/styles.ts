import styled from "styled-components";

export const Title = styled.h2`
	font-size: var(--text-2xl);
	font-weight: var(--font-semibold);
	text-align: center;
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
`;

export const InputRowContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 20px;
`;

export const CustomerDataContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-bottom: 80px;
	max-width: 540px;
`;

export const Separator = styled.div`
	width: 100%;
	height: 1px;
	background-color: var(--gray-2);
`;

export const TeamDataContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const TeamDataTitle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	.title {
		font-size: var(--text-md);
		font-weight: var(--font-bold);
	}

	.subtitle {
		font-size: var(--text-md);
		font-weight: var(--font-medium);
		color: var(--gray-3);
	}
`;

export const RowSelectContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 1rem;

	.label {
		font-size: var(--text-md);
		font-weight: var(--font-bold);
		white-space: nowrap;
		margin-right: 1rem;
	}

	.remove-button {
		border: none;
		background: none;
		opacity: 0.7;
		cursor: pointer;
	}

	.select {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.remove-button:hover {
		opacity: 1;
	}
`;

export const CheckoutInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;

	.row {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: var(--text-lg);
		font-weight: var(--font-normal);
		color: var(--gray-3);
	}

	.tax-info {
		font-size: var(--text-xs);
		font-weight: var(--font-normal);
		color: var(--gray-3);
	}
`;

export const CheckoutTotal = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.total-value {
		font-size: var(--text-2xl);
		font-weight: var(--font-semibold);
	}
`;

