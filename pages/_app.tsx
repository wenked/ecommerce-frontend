import NavBar from '@components/layout/NavBar';
import { AuthProvider } from 'context/AuthContext';
import React from 'react';
import GlobalStyle from '@styles/global';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CartProvider } from 'context/CartContext';
import { AppProps } from 'next/app';

const queryclient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryclient}>
			<AuthProvider>
				<CartProvider>
					<div>
						<GlobalStyle />
						<NavBar />
						<Component {...pageProps} />
					</div>
				</CartProvider>
			</AuthProvider>
		</QueryClientProvider>
	);
}

export default MyApp;
