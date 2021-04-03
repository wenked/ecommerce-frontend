import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalProps {
	display: 'none' | 'block';
}

export const ModalContainer = styled.div<ModalProps>`
	display: ${({ display }) => display};
	position: fixed; /* Stay in place */
	z-index: 1; /* Sit on top */
	padding-top: 100px; /* Location of the box */
	left: 0;
	top: 0;
	width: 100%; /* Full width */
	height: 100%; /* Full height */
	overflow: auto; /* Enable scroll if needed */
	background-color: rgb(0, 0, 0); /* Fallback color */
	background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

export const ModalContent = styled.div`
	background-color: #fefefe;
	margin: auto;
	padding: 20px;
	border: 1px solid #888;
	width: 80%;
`;

export const CloseButton = styled(AiOutlineClose)`
	color: #aaaaaa;
	float: right;
	font-size: 28px;
	font-weight: bold;
	&:hover,
	&:focus {
		color: #000;
		text-decoration: none;
		cursor: pointer;
	}
`;
