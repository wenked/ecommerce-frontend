import { Button, Container } from '@styles/global';
import React, { useState } from 'react';
import {
	ButtonContainer,
	Form,
	Input,
	InputsContainer,
	Label,
	RegisterBox,
} from './styles';

const SingUp: React.FC = () => {
	const [name, setName] = useState('');
	const [lastname, setLastName] = useState('');
	const [borndate, setBornDate] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [state, setState] = useState('');
	const [city, setCity] = useState('');
	const [district, setDistrict] = useState('');
	const [street, setStreet] = useState('');
	const [housenumber, setHouseNumber] = useState<number>();
	const [postalcode, setPostalCode] = useState<number>();
	const [imgurl, setImgUrl] = useState('');
	const [checkPasssword, setCheckPasssword] = useState('');

	return (
		<Container>
			<RegisterBox>
				<Form>
					<Label>Sign Up</Label>
					<InputsContainer>
						<Input required type='text' value={name} placeholder='Name' />
						<Input
							required
							type='text'
							value={lastname}
							placeholder='Last Name'
						/>
						<Input
							required
							type='date'
							value={borndate}
							placeholder='Born Date'
						/>
						<Input required type='text' value={email} placeholder='Email' />
						<Input
							required
							type='password'
							value={password}
							placeholder='Password'
						/>
						<Input
							required
							type='password'
							value={checkPasssword}
							placeholder='Confirm password'
						/>
						<Input required type='text' value={state} placeholder='State' />
						<Input required type='text' value={city} placeholder='City' />
						<Input
							required
							type='text'
							value={district}
							placeholder='District'
						/>
						<Input required type='text' value={street} placeholder='Street' />
						<Input
							required
							type='number'
							value={housenumber}
							placeholder='House Number'
						/>
						<Input
							required
							type='number'
							value={postalcode}
							placeholder='Postal Code'
						/>
						<Input required type='text' value={imgurl} placeholder='Img Url' />
					</InputsContainer>
					<ButtonContainer>
						<Button type='submit' primary>
							Sign Up
						</Button>
					</ButtonContainer>
				</Form>
			</RegisterBox>
		</Container>
	);
};

export default SingUp;
