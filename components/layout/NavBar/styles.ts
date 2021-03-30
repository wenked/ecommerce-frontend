import styled from 'styled-components';
import { Container } from '@styles/global';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

interface NavMenuProps {
	click: boolean;
}

export const Nav = styled.nav`
	background: #006989;
	color: #eaebed;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 999;
`;

export const NavBarContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	height: 80px;
	max-width: 100%;
`;

export const NavLogo = styled.a`
	color: #eaebed;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
`;

export const NavIcon = styled(FaShoppingCart)`
	margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
	display: none;

	@media (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul<NavMenuProps>`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;

	@media (max-width: 960px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 90vh;
		position: absolute;
		top: 80px;
		left: ${({ click }) => (click ? 0 : '-100%')};
		opacity: 1;
		transition: all 0.5s ease;
		background: #006989;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	border-bottom: 2px solid transparent;

	&:hover {
		border-bottom: 2px solid #01a7c2;
	}

	@media (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled.a`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	&:hover {
		color: #a3bac3;
	}

	@media (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: #a3bac3;
			transition: all 0.3s ease;
		}
	}
`;

export const NavItemBtn = styled.li`
	@media (max-width: 960px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 120px;
	}
`;

export const NavBtnLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;
