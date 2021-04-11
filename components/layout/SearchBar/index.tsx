import React, { FormEvent } from 'react';
import {
	IconButton,
	SearchBarContainer,
	SearchIcon,
	SearchInput,
} from './styles';

interface SearchBarProps {
	handleSubmit: (e: FormEvent) => void;
	searchInput: string | undefined;
	setSearchInput: React.Dispatch<React.SetStateAction<string>>;
	variant: 'primary' | 'secondary';
}

const SearchBar: React.FC<SearchBarProps> = ({
	setSearchInput,
	handleSubmit,
	searchInput,
	variant,
}) => {
	return (
		<SearchBarContainer>
			<form onSubmit={handleSubmit}>
				<SearchInput
					variant='secondary'
					customSize='md'
					placeholder='Search items'
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
				/>
				<IconButton type='submit'>
					<SearchIcon variant={variant} />
				</IconButton>
			</form>
		</SearchBarContainer>
	);
};

export default SearchBar;
