import { Button, Input } from '@styles/global';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ButtonContainer, Label } from 'pages/signup/styles';
import React, { FormEvent, useState } from 'react';
import { useQueryClient } from 'react-query';
import { InputGroup, LoginContainer, ErrorContainer } from './styles';

const Login: React.FC = () => {
	const [error, setError] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const queryclient = useQueryClient();
	const router = useRouter();

	const HandleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		console.log(email, password);
		try {
			const res = await axios.post(
				'http://localhost:3333/login',
				{
					email: email,
					password: password,
				},
				{ withCredentials: true }
			);

			if (res.data.message === 'logged in') {
				queryclient.clear();
				router.push('/');
			}
		} catch (err) {
			console.log(err);
			setError(true);
		}
	};

	return (
		<LoginContainer>
			<Label>Login</Label>
			<form onSubmit={HandleSubmit}>
				<InputGroup>
					<Input
						type='text'
						customSize='big'
						placeholder='Email'
						onChange={(e) => setEmail(e.target.value as string)}
					/>
					<Input
						type='password'
						customSize='big'
						placeholder='Password'
						onChange={(e) => setPassword(e.target.value as string)}
					/>
					{error ? (
						<ErrorContainer>
							<span>* Incorrect password or email</span>
						</ErrorContainer>
					) : null}
					<div className='link-container'>
						<Link href='/signup'>Create account</Link>
					</div>
				</InputGroup>
				<ButtonContainer>
					<Button primary>Login</Button>
				</ButtonContainer>
			</form>
		</LoginContainer>
	);
};

export default Login;
