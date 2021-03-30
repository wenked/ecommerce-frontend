import styled from 'styled-components';

export const RegisterBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid black;
	height: 60rem;
	flex-direction: column;
	flex: 1;
	overflow: hidden;
	margin: 2rem;
	@media (min-width: 960px) {
		height: 60rem;
		border: 1px solid red;
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
`;

export const Label = styled.label`
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 600;
	margin: 2rem;
`;

export const InputsContainer = styled.div`
	margin: 2rem;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
`;
