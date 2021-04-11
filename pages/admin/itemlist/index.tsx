import AdminNav from '@components/layout/AdminNav';
import { itemInterface } from 'types/types';
import React, { FormEvent, useEffect, useState } from 'react';
import { AdminContainer } from '../styles';
import axios from 'axios';
import ItemCard from '@components/ItemCard';
import { Items } from './stylex';
import SearchBar from '@components/layout/SearchBar';
import { userIsAuth } from 'utils/userIsAuth';

const ItemList: React.FC = () => {
	const [items, setItems] = useState<itemInterface[]>();
	const [error, setError] = useState(false);
	const [searchInput, setSearchInput] = useState<string | undefined>();
	const [searchError, setSearchError] = useState(false);

	userIsAuth();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (searchInput) {
			const filter = items.filter((item) => item.name === searchInput);
			if (filter.length !== 0) {
				setItems(filter);
				setSearchError(false);
				return;
			}
			setSearchError(true);
		}
	};

	useEffect(() => {
		const CancelToken = axios.CancelToken;
		const source = CancelToken.source();
		const fetchItems = async () => {
			try {
				const res = await axios.get('http://localhost:3333/itemslist', {
					cancelToken: source.token,
				});
				setItems(res.data.items);
			} catch (err) {
				console.log(err);
				setError(true);
			}
		};
		fetchItems();
		return () => source.cancel();
	}, []);

	return (
		<AdminContainer>
			<AdminNav />
			<SearchBar
				variant='primary'
				setSearchInput={setSearchInput}
				handleSubmit={handleSubmit}
				searchInput={searchInput}
			/>
			{searchError ? <h3>0 Items found</h3> : null}
			{!items ? (
				<h2>Loading...</h2>
			) : (
				<Items>
					{items.map((item) => (
						<ItemCard key={item.id} item={item} />
					))}
				</Items>
			)}
		</AdminContainer>
	);
};

export default ItemList;
