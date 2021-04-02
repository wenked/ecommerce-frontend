import styled from 'styled-components';

interface PasswordErrorProps {
	passwordError: boolean;
}

export const RegisterBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 65rem;
	flex-direction: column;
	flex: 1;
	overflow: hidden;
	margin: 2rem;
	border: 2px solid #006989;

	@media (min-width: 960px) {
		margin: 0 auto;
		margin-top: 20px;
		width: 50rem;
		height: 40rem;
		flex-direction: row;
	}
`;

export const Form = styled.form``;

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

export const DropdownBlock = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 960px) {
		flex-direction: row;
	}
`;
