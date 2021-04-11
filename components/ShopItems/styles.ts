import styled from 'styled-components';

export const ShopItemsContainer = styled.div`
	display: block;
	padding: 20px;
	margin: 0 auto;
	color: #006989;

	@media (min-width: 960px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-row-gap: 20px;
		grid-column-gap: 20px;
		width: 1300px;
	}
`;
