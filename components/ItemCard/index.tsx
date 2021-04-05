import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { itemInterface } from 'types/types';
import {
	ButtonGroup,
	CardImg,
	Description,
	DetailsGroup,
	EditIcon,
	IconButton,
	ItemCardContainer,
	ItemNameLabel,
	TrashIcon,
} from './styles';

interface ItemCardProps {
	item: itemInterface;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
	const [error, setError] = useState(false);

	const removeItem = async () => {
		axios.defaults.withCredentials = true;
		try {
			const res = await axios.post('http://localhost:3333/updateitem', {
				id: item.id,
				removeFromDb: true,
			});
			console.log(res.data);
		} catch (err) {
			console.log(err);
			setError(true);
		}
	};

	return (
		<IconContext.Provider value={{ color: '#006989', size: '1.3rem' }}>
			<ItemCardContainer>
				<CardImg src={item.imgUrl} />
				<DetailsGroup>
					<ItemNameLabel>{item.name}</ItemNameLabel>
					<Description>Description: {item.description}</Description>
					<div className='price-inventory'>
						<h3>
							{item.price.toLocaleString('pt-BR', {
								style: 'currency',
								currency: 'BRL',
							})}
						</h3>
						<h3>Inventory: {item.inventory}</h3>
					</div>
				</DetailsGroup>
				<ButtonGroup>
					<IconButton onClick={removeItem}>
						<TrashIcon />
					</IconButton>
					<Link href={`itemlist/edit?id=${item.id}`}>
						<IconButton>
							<EditIcon />
						</IconButton>
					</Link>
				</ButtonGroup>

				{error ? <div>Item not found</div> : null}
			</ItemCardContainer>
		</IconContext.Provider>
	);
};

export default ItemCard;
