import NavBar from '@components/layout/NavBar';
import React from 'react';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<GlobalStyle />
			<NavBar />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
