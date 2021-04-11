import styled from 'styled-components';

export const LoginContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	margin: 30px;
	border-radius: 10px;
	box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);
	@media (min-width: 960px) {
		display: flex;
		justify-content: center;
		width: 600px;
		align-items: center;
		margin: 0 auto;
		margin-top: 20px;
		padding-bottom: 20px;
	}
`;

export const InputGroup = styled.div`
	padding: 10px;

	.link-container {
		padding: 10px;
		a {
			text-decoration: none;
			color: #006989;
			&:hover {
				border-bottom: 1px solid #006989;
			}
		}
	}

	@media (min-width: 960px) {
		display: flex;
		flex-direction: column;
	}
`;

export const ErrorContainer = styled.div`
	display: flex;
	color: red;
	font-weight: 700;
	font-family: 'Roboto', sans-serif;
`;
