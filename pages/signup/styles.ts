import styled from 'styled-components';

interface PasswordErrorProps {
	passwordError: boolean;
}

export const RegisterBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60rem;
	flex-direction: column;
	flex: 1;
	overflow: hidden;
	margin: 2rem;
	@media (min-width: 960px) {
		height: 40rem;
		flex-direction: row;
	}
`;

export const Form = styled.form``;

export const Input = styled.input`
	margin: 0.8rem;
	padding: 0.5rem;
	border: 0;
	background: transparent;
	border-bottom: 1px solid #006989;
	border-radius: 2px;

	&:focus {
		outline: none;
		border-bottom: 2px solid #006989;
		padding-bottom: 6px;
	}
	@media (min-width: 960px) {
		width: 30rem;
	}
`;

export const Label = styled.label`
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 600;
	font-size: 20px;
	margin: 2rem;
	color: #006989;
`;

export const InputsContainer = styled.div`
	margin: 2rem;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	@media (min-width: 960px) {
		margin: 0 auto;
		width: 50%;
	}
`;

export const ErrorContainer = styled.div<PasswordErrorProps>`
	color: red;
	padding: 1rem;
	display: ${({ passwordError }) => (passwordError ? 'flex' : 'none')};
`;
