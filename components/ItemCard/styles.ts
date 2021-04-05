import { FaEdit, FaRegTrashAlt, FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';

export const ItemCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 300px;

	border: 1px solid lightblue;
	margin: 20px;
`;

export const CardImg = styled.img`
	max-height: 300px;
	object-fit: cover;
	width: 100%;
`;

export const DetailsGroup = styled.div`
	display: flex;
	flex-direction: column;

	.price-inventory {
		display: flex;
		flex-direction: row;

		h3 {
			padding: 10px;
			padding-left: 0px;
			font-weight: 500;
		}
	}
`;

export const ItemNameLabel = styled.h3`
	font-weight: bold;
	font-size: 14px;
	padding: 10px;
	padding-left: 0px;
`;

export const Description = styled.p``;

export const TrashIcon = styled(FaRegTrashAlt)`
	height: 50px;
`;

export const EditIcon = styled(FaEdit)``;

export const IconButton = styled.button`
	cursor: pointer;
	border: none;
	outline: none;
	padding: 20px;
	background-color: inherit;
`;

export const ButtonGroup = styled.div`
	display: flex;
	flex-direction: row;
`;
