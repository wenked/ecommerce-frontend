import styled from 'styled-components';

export const ShopItemContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	width: 300px;
	border-radius: 10px;
	height: 100%;
	margin: 20px;
	box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);
`;

export const ShopItemImg = styled.img`
	max-height: 300px;
	object-fit: cover;
`;

export const ShopItemDataContainer = styled.div`
	padding: 1rem;
	height: 100%;
`;
