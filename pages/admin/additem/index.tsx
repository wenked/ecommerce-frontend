import ItemForm from '@components/ItemForm';
import AdminNav from '@components/layout/AdminNav';
import Modal from '@components/layout/Modal';
import { MyTitle } from '@styles/global';

import axios from 'axios';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';

import React, { FormEvent, useEffect, useState } from 'react';
import { userIsAuth } from 'utils/userIsAuth';
import { AdminContainer } from '../styles';
import { AddItemContainer } from './styles';

const AddItem: React.FC = () => {
	const [name, setName] = useState<string>();
	const [description, setDescription] = useState<string>();
	const [price, setPrice] = useState<number>();
	const [category, setCategory] = useState<string>();
	const [imgUrl, setImgUrl] = useState<string>();
	const [inventory, setInventory] = useState<number>();
	const [toggle, setToggle] = useState(false);

	userIsAuth();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		axios.defaults.withCredentials = true;
		const res = await axios.post('http://localhost:3333/additem', {
			name,
			description,
			price,
			category,
			imgUrl,
			inventory,
		});

		console.log(res.data);
		setToggle(true);
	};

	return (
		<AdminContainer>
			<AdminNav />
			<Modal
				toggle={toggle}
				setToggle={setToggle}
				text='Item added succefully'
			/>
			<MyTitle>Add Item</MyTitle>
			<AddItemContainer>
				<ItemForm
					required
					handleSubmit={handleSubmit}
					name={name}
					setName={setName}
					price={price}
					setPrice={setPrice}
					category={category}
					setCategory={setCategory}
					inventory={inventory}
					setInventory={setInventory}
					imgUrl={imgUrl}
					setImgUrl={setImgUrl}
					buttonText='+ Add item'
					description={description}
					setDescription={setDescription}
				/>
			</AddItemContainer>
		</AdminContainer>
	);
};

export default AddItem;
