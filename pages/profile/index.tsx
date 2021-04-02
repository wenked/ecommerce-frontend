import { Input } from '@styles/global';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
	ProfileContainer,
	ProfileInput,
	ProfileInputs,
	ProfileLabel,
} from './styles';

const ProfilePage: React.FC = () => {
	const { signed, loading, user } = useAuth();
	const router = useRouter();
	const [changeData, setChangeData] = useState(true);
	const [firstName, setFirstName] = useState<string>();

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
			<form>
				<button type='button' onClick={() => setChangeData(!changeData)}>
					{changeData ? (
						<span>Change your information</span>
					) : (
						<span>Dont change</span>
					)}
				</button>
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
				</ProfileInputs>
			</form>
		</ProfileContainer>
	) : null;
};

export default ProfilePage;
