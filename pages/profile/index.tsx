import Dropdown from '@components/layout/Dropdown';
import { Button, Input } from '@styles/global';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import { ButtonContainer, DropdownBlock } from 'pages/signup/styles';
import React, { FormEvent, useEffect, useState } from 'react';
import csc from 'country-state-city';

import {
	ProfileContainer,
	ProfileInput,
	ProfileInputs,
	ProfileLabel,
	UpdateInfoButton,
} from './styles';
import axios from 'axios';
import { ErrorContainer } from 'pages/login/styles';

const ProfilePage: React.FC = () => {
	const { signed, loading, user } = useAuth();
	const router = useRouter();
	const [changeData, setChangeData] = useState(true);
	const [firstName, setFirstName] = useState<string>();
	const [lastname, setLastName] = useState<string>();
	const [borndate, setBornDate] = useState<string>();
	const [email, setEmail] = useState<string>();
	const [oldPassword, setOldPassword] = useState<string>();
	const [newPassword, setNewPassword] = useState<string>();
	const [state, setState] = useState<string>();
	const [city, setCity] = useState<string>();
	const [district, setDistrict] = useState<string>();
	const [street, setStreet] = useState<string>();
	const [housenumber, setHouseNumber] = useState<number>();
	const [postalcode, setPostalCode] = useState<number>();
	const [imgurl, setImgUrl] = useState<string>();
	const [error, setError] = useState(false);

	const HandleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		try {
			axios.defaults.withCredentials = true;
			const res = await axios.post('http://localhost:3333/updateuser', {
				firstName,
				lastName: lastname,
				bornDate: borndate,
				email,
				oldPassword,
				newPassword,
				state,
				city,
				street,
				houseNumber: housenumber,
				postalCode: postalcode,
				imgUrl: imgurl,
			});

			console.log(res.data);
			router.push('/');
		} catch (err) {
			console.log(err);
			setError(true);
		}
	};

	useEffect(() => {
		if (!signed && !loading) {
			router.replace('/login');
		}
	}, [signed, loading]);

	return loading ? (
		<div>LOADING...</div>
	) : user ? (
		<ProfileContainer>
			<h3>My account</h3>
			<form onSubmit={HandleSubmit}>
				<UpdateInfoButton
					type='button'
					onClick={() => setChangeData(!changeData)}>
					{changeData ? (
						<span>Change your information</span>
					) : (
						<span>Dont change</span>
					)}
				</UpdateInfoButton>
				<ProfileInputs>
					<ProfileInput>
						<ProfileLabel>First Name</ProfileLabel>
						<Input
							customSize='md'
							value={changeData ? user.firstName : firstName}
							disabled={changeData}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</ProfileInput>
					<ProfileInput>
						<ProfileLabel>Last Name</ProfileLabel>
						<Input
							customSize='md'
							value={changeData ? user.lastName : lastname}
							disabled={changeData}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</ProfileInput>
					<ProfileInput>
						<ProfileLabel>Born date</ProfileLabel>
						<Input
							customSize='md'
							value={changeData ? user.bornDate : borndate}
							disabled={changeData}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</ProfileInput>
					<ProfileInput>
						<ProfileLabel>Email</ProfileLabel>
						<Input
							customSize='md'
							value={changeData ? user.email : email}
							disabled={changeData}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</ProfileInput>
					<ProfileInput>
						<ProfileLabel>Street</ProfileLabel>
						<Input
							customSize='md'
							value={changeData ? user.street : street}
							disabled={changeData}
							onChange={(e) => setStreet(e.target.value)}
						/>
					</ProfileInput>
					<ProfileInput>
						<ProfileLabel>House number</ProfileLabel>
						<Input
							customSize='md'
							type='number'
							value={changeData ? user.houseNumber : housenumber}
							disabled={changeData}
							onChange={(e) => setHouseNumber(parseInt(e.target.value))}
						/>
					</ProfileInput>
					<ProfileInput>
						<ProfileLabel>District</ProfileLabel>
						<Input
							customSize='md'
							value={changeData ? user.district : district}
							disabled={changeData}
							onChange={(e) => setDistrict(e.target.value)}
						/>
					</ProfileInput>
					<ProfileInput>
						<ProfileLabel>Postal Code</ProfileLabel>
						<Input
							customSize='md'
							value={changeData ? user.postalCode : postalcode}
							disabled={changeData}
							onChange={(e) => setPostalCode(parseInt(e.target.value))}
						/>
					</ProfileInput>
					<ProfileInput>
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
					</ProfileInput>
					<ProfileInput>
						<ProfileLabel>Img url</ProfileLabel>
						<Input
							customSize='md'
							value={changeData ? user.imgUrl : imgurl}
							disabled={changeData}
							onChange={(e) => setImgUrl(e.target.value)}
						/>
					</ProfileInput>
					<ProfileInput>
						<ProfileLabel>Old Password</ProfileLabel>
						<Input
							type='password'
							customSize='md'
							value={oldPassword}
							disabled={changeData}
							onChange={(e) => setOldPassword(e.target.value)}
						/>
					</ProfileInput>
					<ProfileInput>
						<ProfileLabel>New Password</ProfileLabel>
						<Input
							type='password'
							customSize='md'
							value={newPassword}
							disabled={changeData}
							onChange={(e) => setNewPassword(e.target.value)}
						/>
					</ProfileInput>
				</ProfileInputs>
				<ButtonContainer>
					<Button primary type='submit'>
						Update
					</Button>
				</ButtonContainer>
				{error ? (
					<ErrorContainer>
						<span>* Incorrect old password</span>
					</ErrorContainer>
				) : null}
			</form>
		</ProfileContainer>
	) : null;
};

export default ProfilePage;
