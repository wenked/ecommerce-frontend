import AdminNav from '@components/layout/AdminNav';
import { LabelContainer } from '@components/layout/Dropdown/styles';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { AdminContainer } from './styles';

const Admin: React.FC = () => {
	const { user, loading, error } = useAuth();
	const router = useRouter();

	useEffect(() => {
		console.log(user);
		if (!loading && !user) {
			console.log(user);
			router.replace('/');
		}
	}, [user, loading]);

	if (loading) {
		return (
			<AdminContainer className='error-loading'>loading...</AdminContainer>
		);
	}

	if (error) {
		return <AdminContainer className='error-loading'>error...</AdminContainer>;
	}

	if (user && !user.isAdmin) {
		return (
			<AdminContainer className='error-loading'>
				Not authorized user
			</AdminContainer>
		);
	}

	return user ? (
		<AdminContainer>
			<AdminNav />
			<LabelContainer>Admin: {user.firstName}</LabelContainer>
		</AdminContainer>
	) : null;
};

export default Admin;
