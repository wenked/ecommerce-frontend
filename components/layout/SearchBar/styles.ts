import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

export const SearchBarContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin: 0 auto;
`;

export const SearchIcon = styled(FaSearch)`
	color: #006989;
`;

export const IconButton = styled.button`
	border: none;
	outline: none;
	cursor: pointer;
`;
