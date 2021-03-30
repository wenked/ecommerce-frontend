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

const NavBar: React.FC = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

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
								Ecommerce
							</NavLogo>
						</Link>
						<MobileIcon onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</MobileIcon>
						<NavMenu onClick={handleClick} click={click}>
							<NavItem>
								<Link href='/' passHref>
									<NavLinks>Home</NavLinks>
								</Link>
							</NavItem>
							<NavItem>
								<Link href='/smartphones' passHref>
									<NavLinks>Smartphones</NavLinks>
								</Link>
							</NavItem>
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
						</NavMenu>
					</NavBarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default NavBar;
