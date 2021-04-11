import styled from 'styled-components';

export const ProfileContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 320px;
	margin: 0 auto;
	flex-direction: column;
	border-radius: 10px;
	box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);
	padding: 20px;

	h3 {
		padding: 10px;
		color: #006989;
		display: flex;
		justify-content: center;
	}

	@media (min-width: 960px) {
		width: 900px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
	}
`;

export const ProfileInputs = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 960px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
`;

export const ProfileLabel = styled.label`
	color: #006989;
	font-weight: bold;
	font-size: 13px;
	padding: 8px;
`;

export const ProfileInput = styled.div`
	display: flex;
	flex-direction: column;
`;

export const UpdateInfoButton = styled.button`
	border: none;
	color: #006989;
	font-weight: bold;
	font-size: 12px;
	cursor: pointer;
	margin: 10px;

	&:hover &:focus {
		border-bottom: 1px solid #006989;
	}

	&:focus {
		border-bottom: 1px solid #006989;
		outline: none;
	}
`;
