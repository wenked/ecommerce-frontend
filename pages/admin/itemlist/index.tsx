import AdminNav from '@components/layout/AdminNav';
import React from 'react';
import { AdminContainer } from '../styles';

const ItemList: React.FC = () => {
	return (
		<AdminContainer>
			<AdminNav />
		</AdminContainer>
	);
};

export default ItemList;
