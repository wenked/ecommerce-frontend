import styled, { createGlobalStyle } from 'styled-components';

interface ButtonProps {
	primary: boolean;
	big?: boolean;
	fontBig?: boolean;
}

interface InputProps {
	customSize: 'big' | 'small' | 'md';
}

export default createGlobalStyle`
 * {
     margin:0;
     padding:0;
     box-sizing:border-box;
 }

 body {
   background: #F7F9F9;
   font-size: 14px;
   color:black;
   font-family:'Roboto',sans-serif  
 }

`;

export const Container = styled.div`
	z-index: 1;
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding-right: 50px;
	padding-left: 50px;

	@media (max-width: 991px) {
		padding-right: 10px;
		padding-left: 10px;
	}
`;

export const Button = styled.button<ButtonProps>`
	border-radius: 4px;
	background: ${({ primary }) => (primary ? '#01A7C2' : '#EAEBED')};
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	color: #eaebed;
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;

	&:hover {
		transition: all 0.3s ease-out;
		color: #01a7c2;
		background: ${({ primary }) => (primary ? '#EAEBED' : '#01A7C2')};
	}

	@media (min-width: 960px) {
		width: 100%;
	}
`;

export const MyTitle = styled.h2`
	padding: 20px;
	font-weight: 700;
`;

export const Input = styled.input<InputProps>`
	margin: 0.8rem;
	padding: 0.5rem;
	border: 0;
	background: transparent;
	border-bottom: 1px solid #006989;
	border-radius: 2px;
	font-family: 'Roboto', sans-serif;
	width: 15rem;
	&:focus {
		outline: none;
		border-bottom: 2px solid #006989;
		padding-bottom: 6px;
	}
	@media (min-width: 960px) {
		width: ${({ customSize }) => {
			if (customSize === 'big') {
				return '30rem';
			}

			if (customSize === 'md') {
				return '20rem';
			}

			if (customSize === 'small') {
				return '10rem';
			}
		}};
	}
`;
