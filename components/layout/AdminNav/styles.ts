import styled from 'styled-components';

export const AdminNavContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #006989;
`;

export const Nav = styled.nav``;

export const NavGroup = styled.ul`
	list-style: none;
	display: inline-block;
`;

export const NavItem = styled.li`
	padding: 10px;
	font-weight: bold;

	&:hover {
		border-bottom: 1px solid #006989;
		cursor: pointer;
	}

	@media (min-width: 960px) {
		font-size: 20px;
	}
`;
