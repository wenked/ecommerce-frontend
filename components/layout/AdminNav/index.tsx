import Link from 'next/link';
import React from 'react';
import { AdminNavContainer, Nav, NavGroup, NavItem } from './styles';

const AdminNav: React.FC = () => {
	return (
		<AdminNavContainer>
			<Nav>
				<NavGroup>
					<Link href='/admin/additem' passHref>
						<NavItem>Add Item</NavItem>
					</Link>
				</NavGroup>
				<NavGroup>
					<Link href='/admin/removeitem' passHref>
						<NavItem>Remove Item</NavItem>
					</Link>
				</NavGroup>
				<NavGroup>
					<Link href='/admin/itemlist' passHref>
						<NavItem>Item List</NavItem>
					</Link>
				</NavGroup>
			</Nav>
		</AdminNavContainer>
	);
};

export default AdminNav;
