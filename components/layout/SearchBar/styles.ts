import { Input } from '@styles/global';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

interface SearchIconProps {
	variant: 'primary' | 'secondary';
}

export const SearchBarContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin: 0 auto;

	@media (max-width: 960px) {
		flex-direction: row-reverse;
	}
`;

export const SearchInput = styled(Input)`
	width: 350px;
	@media (max-width: 960px) {
		width: 200px;
	}
`;

export const SearchIcon = styled(FaSearch)<SearchIconProps>`
	color: ${({ variant }) => (variant === 'primary' ? '#006989' : 'white')};
	background: ${({ variant }) => (variant === 'primary' ? '' : '#006989')};
`;

export const IconButton = styled.button`
	border: none;
	outline: none;
	cursor: pointer;
`;
