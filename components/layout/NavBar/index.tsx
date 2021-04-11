import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
	MobileIcon,
	Nav,
	NavBarContainer,
	NavIcon,
	NavLogo,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtnLink,
	NavItemBtn,
} from './styles';
import { IconContext } from 'react-icons/lib';
import { Button } from '@styles/global';
import { useAuth } from 'context/AuthContext';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';
import { useCart } from 'context/CartContext';
import SearchBar from '../SearchBar';
import { FormEvent } from 'react';

const NavBar: React.FC = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const [searchInput, setSearchInput] = useState('');
	const queryclient = useQueryClient();
	const router = useRouter();
	const { cartItems } = useCart();

	const { user, loading, error, signed } = useAuth();

	const handleClick = () => {
		setClick(!click);
		console.log(cartItems);
	};
	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	};

	if (typeof window !== 'undefined') {
		window.addEventListener('resize', showButton);
	}

	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<Nav>
					<NavBarContainer>
						<Link href='/' passHref>
							<NavLogo>
								<NavIcon />
								{!button ? '' : 'Ecommerce'}
							</NavLogo>
						</Link>
						<MobileIcon onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</MobileIcon>
						<SearchBar
							variant='secondary'
							handleSubmit={handleSubmit}
							searchInput={searchInput}
							setSearchInput={setSearchInput}
						/>
						<NavMenu onClick={handleClick} click={click}>
							<NavItem>
								<Link href='/' passHref>
									<NavLinks>Home TESTE3</NavLinks>
								</Link>
							</NavItem>
							<NavItem>
								<Link href='/cart' passHref>
									<NavLinks>Cart</NavLinks>
								</Link>
							</NavItem>

							{signed ? (
								<>
									<NavItem>
										<Link href='/profile' passHref>
											<NavLinks>{user.firstName}</NavLinks>
										</Link>
									</NavItem>
									<NavItem>
										<NavLinks
											style={{ cursor: 'pointer' }}
											onClick={async () => {
												try {
													const res = await axios.get(
														'http://localhost:3333/logout',
														{
															withCredentials: true,
														}
													);
													queryclient.clear();
													router.push('/login');
													console.log(res.data);
												} catch (err) {
													console.log(err);
													router.push('/login');
												}
											}}>
											logout
										</NavLinks>
									</NavItem>
								</>
							) : (
								<>
									<NavItemBtn>
										{button ? (
											<Link href='/signup' passHref>
												<NavBtnLink>
													<Button primary>Sign up</Button>
												</NavBtnLink>
											</Link>
										) : (
											<Link href='/signup' passHref>
												<NavBtnLink>
													<Button primary fontBig>
														Sign up
													</Button>
												</NavBtnLink>
											</Link>
										)}
									</NavItemBtn>
									<NavItemBtn>
										{button ? (
											<Link href='/login' passHref>
												<NavBtnLink>
													<Button primary>Login</Button>
												</NavBtnLink>
											</Link>
										) : (
											<Link href='/login' passHref>
												<NavBtnLink>
													<Button primary fontBig>
														Login
													</Button>
												</NavBtnLink>
											</Link>
										)}
									</NavItemBtn>
								</>
							)}
						</NavMenu>
					</NavBarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default NavBar;
