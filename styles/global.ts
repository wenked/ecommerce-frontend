import styled, { createGlobalStyle } from 'styled-components';

interface ButtonProps {
	primary: boolean;
	big?: boolean;
	fontBig?: boolean;
}

export default createGlobalStyle`
 * {
     margin:0;
     padding:0;
     box-sizing:border-box;
 }

 body {
   background: #232528;
   font-size: 14px;
   color:#eaf6ff;
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
		padding-right: 30px;
		padding-left: 30px;
	}
`;

export const Button = styled.button<ButtonProps>`
	border-radius: 4px;
	background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	color: #fff;
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;

	&:hover {
		transition: all 0.3s ease-out;
		background: #fff;
		background: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
	}

	@media (min-width: 960px) {
		width: 100%;
	}
`;
