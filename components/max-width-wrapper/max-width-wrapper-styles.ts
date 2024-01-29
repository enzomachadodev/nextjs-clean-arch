import styled from "styled-components";

export const MaxWidthWrapper = styled.div`
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	padding-right: 1rem;
	padding-left: 1rem;

	@media (min-width: 640px) {
		max-width: 640px;
	}

	@media (min-width: 768px) {
		max-width: 768px;
	}

	@media (min-width: 1024px) {
		max-width: 1024px;
	}

	@media (min-width: 1280px) {
		max-width: 1280px;
	}

	@media (min-width: 1536px) {
		max-width: 1536px;
	}
`;

