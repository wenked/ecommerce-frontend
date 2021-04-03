import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

export interface user {
	email: string;
	id: 1;
	firstName: string;
	lastName: string;
	isAdmin: boolean;
	street: string;
	houseNumber: number;
	state: string;
	city: string;
	district: string;
	postalCode: number;
	bornDate: string;
	imgUrl: string;
}

interface AuthContextData {
	user: user;
	signed: boolean;
	loading: boolean;
	error: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const fetcher = async () => {
	const res = await axios.get('http://localhost:3333/me', {
		withCredentials: true,
	});

	return res.data;
};

export const AuthProvider: React.FC = ({ children }) => {
	const { data, isError, isLoading } = useQuery('me', fetcher, {
		refetchOnWindowFocus: false,
		retry: false,
		enabled: typeof window !== 'undefined',
	});
	console.log(data);
	return (
		<AuthContext.Provider
			value={{
				user: data,
				signed: !!data,
				loading: isLoading,
				error: isError,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);

	return context;
};
