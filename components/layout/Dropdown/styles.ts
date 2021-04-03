import styled from 'styled-components';

export const DropdownContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
	max-width: 200px;
`;

export const LabelContainer = styled.div`
	color: #006989;
	font-weight: bold;
	padding: 10px;
	font-size: 12px;
	@media (min-width: 960px) {
		font-size: 14px;
	}
`;

export const SelectContainer = styled.div`
	select {
		font-family: 'Roboto', sans-serif;
		padding: 10px;
	}
`;
