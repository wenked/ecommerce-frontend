import ItemForm from '@components/ItemForm';
import AdminNav from '@components/layout/AdminNav';
import Modal from '@components/layout/Modal';
import { MyTitle } from '@styles/global';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react';
import { userIsAuth } from 'utils/userIsAuth';
import { EditContainer, FormContainer } from './styles';

const EditItem: React.FC = () => {
	const [name, setName] = useState<string>();
	const [description, setDescription] = useState<string>();
	const [price, setPrice] = useState<number>();
	const [category, setCategory] = useState<string>();
	const [imgUrl, setImgUrl] = useState<string>();
	const [inventory, setInventory] = useState<number>();
	const [toggle, setToggle] = useState(false);
	const [error, setError] = useState(false);
	const router = useRouter();

	const { id } = router.query;

	userIsAuth();
	const handleSubmit = async (e: FormEvent) => {
		axios.defaults.withCredentials = true;
		e.preventDefault();
		try {
			const res = await axios.post('http://localhost:3333/updateitem', {
				id,
				name,
				description,
				price,
				category,
				imgUrl,
				inventory,
			});

			console.log(res.data);
			setToggle(true);
		} catch (err) {
			console.log(err);
			setError(true);
		}
	};

	return (
		<EditContainer>
			<AdminNav />
			<Modal
				toggle={toggle}
				setToggle={setToggle}
				text='Item updated succefully'
			/>
			<MyTitle>Edit Item</MyTitle>

			<FormContainer>
				<ItemForm
					required={false}
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
					buttonText='Update Item'
					description={description}
					setDescription={setDescription}
				/>
			</FormContainer>
		</EditContainer>
	);
};

export default EditItem;
