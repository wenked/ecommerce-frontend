export interface itemInterface {
	id: number;
	name: string;
	description: string;
	category: string;
	price: number;
	inventory: number;
	imgUrl: string;
	createdAt: string;
	updatedAt: string;
}

export interface cartItemInterface {
	id: number;
	name: string;
	description: string;
	category: string;
	price: number;
	inventory: number;
	imgUrl: string;
	amount: number;
}
