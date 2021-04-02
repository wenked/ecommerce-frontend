import styled from 'styled-components';

export const ProfileContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 320px;
	margin: 0 auto;
	flex-direction: column;

	h3 {
		padding: 10px;
		color: #006989;
		display: flex;
		justify-content: center;
	}

	@media (min-width: 960px) {
		width: 1300px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
	}
`;

export const ProfileInputs = styled.div`
	display: block;
`;

export const ProfileLabel = styled.label`
	color: #006989;
	font-weight: bold;
	font-size: 13;
	padding: 10px;
`;

export const ProfileInput = styled.div``;
