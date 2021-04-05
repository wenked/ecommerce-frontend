import styled from 'styled-components';

export const ShopItemContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	width: 300px;
	border: 1px solid lightblue;
	height: 100%;
	margin: 20px;
`;

export const ShopItemImg = styled.img`
	max-height: 300px;
	object-fit: cover;
`;

export const ShopItemDataContainer = styled.div`
	padding: 1rem;
	height: 100%;
`;
