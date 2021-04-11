import { Input, Button } from '@styles/global';
import {
	ProfileInputs,
	ProfileInput,
	ProfileLabel,
} from 'pages/profile/styles';
import { ButtonContainer } from 'pages/signup/styles';
import React, { FormEvent } from 'react';

interface ItemFormProps {
	handleSubmit: (e: FormEvent) => Promise<void>;
	name: string;
	setName: React.Dispatch<React.SetStateAction<string>>;
	description: string;
	setDescription: React.Dispatch<React.SetStateAction<string>>;
	price: number;
	setPrice: React.Dispatch<React.SetStateAction<number>>;
	category: string;
	setCategory: React.Dispatch<React.SetStateAction<string>>;
	imgUrl: string;
	setImgUrl: React.Dispatch<React.SetStateAction<string>>;
	inventory: number;
	setInventory: React.Dispatch<React.SetStateAction<number>>;
	buttonText: string;
	required: boolean;
}

const ItemForm: React.FC<ItemFormProps> = ({
	name,
	setName,
	description,
	setDescription,
	price,
	setPrice,
	setImgUrl,
	inventory,
	setInventory,
	handleSubmit,
	imgUrl,
	category,
	setCategory,
	buttonText,
	required,
}) => {
	return (
		<form onSubmit={handleSubmit}>
			<ProfileInputs>
				<ProfileInput>
					<ProfileLabel>Name</ProfileLabel>
					<Input
						variant='primary'
						required={required}
						customSize='md'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</ProfileInput>
				<ProfileInput>
					<ProfileLabel>Description</ProfileLabel>
					<Input
						variant='primary'
						required={required}
						customSize='md'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</ProfileInput>
				<ProfileInput>
					<ProfileLabel>Price</ProfileLabel>
					<Input
						variant='primary'
						required={required}
						customSize='md'
						type='number'
						value={price}
						onChange={(e) => setPrice(parseInt(e.target.value))}
					/>
				</ProfileInput>
				<ProfileInput>
					<ProfileLabel>Category</ProfileLabel>
					<Input
						variant='primary'
						required={required}
						customSize='md'
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					/>
				</ProfileInput>
				<ProfileInput>
					<ProfileLabel>Img url</ProfileLabel>
					<Input
						variant='primary'
						required={required}
						customSize='md'
						value={imgUrl}
						onChange={(e) => setImgUrl(e.target.value)}
					/>
				</ProfileInput>
				<ProfileInput>
					<ProfileLabel>Inventory</ProfileLabel>
					<Input
						variant='primary'
						required={required}
						customSize='small'
						type='number'
						value={inventory}
						onChange={(e) => setInventory(parseInt(e.target.value))}
					/>
				</ProfileInput>
			</ProfileInputs>
			<ButtonContainer>
				<Button primary type='submit'>
					{buttonText}
				</Button>
			</ButtonContainer>
		</form>
	);
};

export default ItemForm;
