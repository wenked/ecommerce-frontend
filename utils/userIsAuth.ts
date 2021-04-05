import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const userIsAuth = () => {
	const { user, loading, error } = useAuth();
	const router = useRouter();

	useEffect(() => {
		console.log(user);
		if (!loading && !user) {
			console.log(user);
			router.replace('/');
		}
	}, [user, loading]);
};
