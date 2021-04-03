import AdminNav from '@components/layout/AdminNav';
import Modal from '@components/layout/Modal';
import { Button, Input } from '@styles/global';
import axios from 'axios';
import { useRouter } from 'next/router';
import {
	ProfileInput,
	ProfileInputs,
	ProfileLabel,
} from 'pages/profile/styles';
import { ButtonContainer } from 'pages/signup/styles';
import React, { FormEvent, useState } from 'react';
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
	const router = useRouter();

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
			<AddItemContainer>
				<form onSubmit={handleSubmit}>
					<ProfileInputs>
						<ProfileInput>
							<ProfileLabel>Name</ProfileLabel>
							<Input
								required
								customSize='md'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</ProfileInput>
						<ProfileInput>
							<ProfileLabel>Description</ProfileLabel>
							<Input
								required
								customSize='md'
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</ProfileInput>
						<ProfileInput>
							<ProfileLabel>Price</ProfileLabel>
							<Input
								required
								customSize='md'
								type='number'
								value={price}
								onChange={(e) => setPrice(parseInt(e.target.value))}
							/>
						</ProfileInput>
						<ProfileInput>
							<ProfileLabel>Category</ProfileLabel>
							<Input
								required
								customSize='md'
								value={category}
								onChange={(e) => setCategory(e.target.value)}
							/>
						</ProfileInput>
						<ProfileInput>
							<ProfileLabel>Img url</ProfileLabel>
							<Input
								required
								customSize='md'
								value={imgUrl}
								onChange={(e) => setImgUrl(e.target.value)}
							/>
						</ProfileInput>
						<ProfileInput>
							<ProfileLabel>Inventory</ProfileLabel>
							<Input
								required
								customSize='md'
								type='number'
								value={inventory}
								onChange={(e) => setInventory(parseInt(e.target.value))}
							/>
						</ProfileInput>
					</ProfileInputs>
					<ButtonContainer>
						<Button primary type='submit'>
							+ Add Item
						</Button>
					</ButtonContainer>
				</form>
			</AddItemContainer>
		</AdminContainer>
	);
};

export default AddItem;
