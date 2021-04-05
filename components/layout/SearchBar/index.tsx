import { Input } from '@styles/global';
import React, { FormEvent } from 'react';
import { IconButton, SearchBarContainer, SearchIcon } from './styles';

interface SearchBarProps {
	handleSubmit: (e: FormEvent) => void;
	searchInput: string | undefined;
	setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({
	setSearchInput,
	handleSubmit,
	searchInput,
}) => {
	return (
		<SearchBarContainer>
			<form onSubmit={handleSubmit}>
				<Input
					customSize='md'
					placeholder='Search items'
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
				/>
				<IconButton type='submit'>
					<SearchIcon />
				</IconButton>
			</form>
		</SearchBarContainer>
	);
};

export default SearchBar;
