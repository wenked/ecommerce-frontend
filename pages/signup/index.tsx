import { Button, Container, Input } from '@styles/global';
import axios from 'axios';
import React, { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
	ButtonContainer,
	DropdownBlock,
	ErrorContainer,
	Form,
	InputsContainer,
	Label,
	RegisterBox,
} from './styles';
import csc from 'country-state-city';
import Dropdown from '@components/layout/Dropdown';

const SingUp: React.FC = () => {
	const router = useRouter();
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
	const [passwordError, setPasswordError] = useState(false);

	const HandleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		if (password !== checkPasssword) {
			setPasswordError(true);
		} else {
			const res = await axios.post('http://localhost:3333/register', {
				firstName: name,
				lastName: lastname,
				street: street,
				houseNumber: housenumber,
				district,
				city,
				state,
				bornDate: borndate,
				password,
				email,
				imgUrl: imgurl,
				postalCode: postalcode,
			});

			console.log(res);

			router.push('/signup/registercompleted');
		}
	};

	return (
		<Container>
			<RegisterBox>
				<Form onSubmit={HandleSubmit}>
					<Label>Sign Up</Label>
					<InputsContainer>
						<Input
							required
							customSize='md'
							type='text'
							value={name}
							placeholder='Name'
							onChange={(e) => setName(e.target.value)}
						/>
						<Input
							required
							customSize='md'
							type='text'
							value={lastname}
							placeholder='Last Name'
							onChange={(e) => setLastName(e.target.value)}
						/>
						<Input
							required
							customSize='md'
							type='text'
							value={email}
							placeholder='Email'
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input
							customSize='small'
							required
							type='date'
							value={borndate}
							placeholder='Born Date'
							onChange={(e) => setBornDate(e.target.value)}
						/>

						<Input
							required
							customSize='md'
							type='password'
							value={password}
							placeholder='Password'
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Input
							required
							customSize='md'
							type='password'
							value={checkPasssword}
							placeholder='Confirm password'
							onChange={(e) => setCheckPasssword(e.target.value)}
						/>
						<DropdownBlock>
							<Dropdown
								options={csc.getStatesOfCountry('BR').map((a) => a.isoCode)}
								setOption={setState}
								placeholder='State'
							/>
							<Dropdown
								options={csc.getCitiesOfState('BR', state).map((b) => b.name)}
								setOption={setCity}
								placeholder='City'
							/>
						</DropdownBlock>
						<Input
							required
							customSize='md'
							type='text'
							value={district}
							placeholder='District'
							onChange={(e) => setDistrict(e.target.value)}
						/>
						<Input
							required
							customSize='md'
							type='text'
							value={street}
							placeholder='Street'
							onChange={(e) => setStreet(e.target.value)}
						/>
						<Input
							required
							customSize='small'
							type='number'
							value={housenumber}
							placeholder='House Number'
							onChange={(e) => setHouseNumber(parseInt(e.target.value))}
						/>
						<Input
							required
							customSize='small'
							type='number'
							value={postalcode}
							placeholder='Postal Code'
							onChange={(e) => setPostalCode(parseInt(e.target.value))}
						/>
						<Input
							required
							customSize='md'
							type='text'
							value={imgurl}
							placeholder='Img Url'
							onChange={(e) => setImgUrl(e.target.value)}
						/>
					</InputsContainer>
					<ButtonContainer>
						<Button type='submit' primary>
							Sign Up
						</Button>
					</ButtonContainer>
					<ErrorContainer passwordError={passwordError}>
						<span>* Passwords not match</span>
					</ErrorContainer>
				</Form>
			</RegisterBox>
		</Container>
	);
};

export default SingUp;
