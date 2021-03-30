import Link from 'next/link';
import React from 'react';
import { RegisterCompletedContainer } from './styles';

const RegisterCompleted = () => {
	return (
		<RegisterCompletedContainer>
			<h2>Register Completed.</h2>
			<Link href='/'>
				<span>Back to home page.</span>
			</Link>
		</RegisterCompletedContainer>
	);
};

export default RegisterCompleted;
