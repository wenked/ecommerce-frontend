import styled from 'styled-components';

export const CartItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	color: #006989;
	border: 1px solid #006989;
	margin: 10px;
	width: 100%;
	max-width: 900px;
`;

export const ItemDetailContainer = styled.div`
	display: flex;
	flex-direction: row;

	h3 {
		padding: 5px;
		display: flex;
		flex-direction: row-reverse;
	}
	img {
		width: 50px;
		height: 50px;
	}
`;

export const CartItemButton = styled.button`
	padding: 5px;
	background-color: #01a7c2;
	color: #eaebed;
	border-radius: 4px;
	outline: none;
	border: none;
	cursor: pointer;
	width: 40px;
	&:hover {
		transition: all 0.3s ease-out;
		color: #01a7c2;
		background-color: #eaebed;
	}
`;

export const CartItemButtonsContainer = styled.div`
	display: flex;
	flex-direction: row-reverse;
	padding: 10px;
	h3 {
		padding: 10px;
	}
`;

export const ItemGroupInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Buttons = styled.div`
	display: flex;
	flex-direction: row; ;
`;
