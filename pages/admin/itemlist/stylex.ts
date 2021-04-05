import styled from 'styled-components';

export const Items = styled.div`
	display: block;

	@media (min-width: 960px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		margin: 0 auto;
	}
`;
