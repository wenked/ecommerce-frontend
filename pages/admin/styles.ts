import styled from 'styled-components';

export const AdminContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	flex-direction: column;
	color: #006989;

	.error-loading {
		font-weight: bold;
		font-size: 20px;
	}

	@media (min-width: 960px) {
		margin: 0 auto;
		width: 1300px;
	}
`;
