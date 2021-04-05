import NavBar from '@components/layout/NavBar';
import { AuthProvider } from 'context/AuthContext';
import React from 'react';
import GlobalStyle from '@styles/global';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryclient = new QueryClient();
function MyApp({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryclient}>
			<AuthProvider>
				<div>
					<GlobalStyle />
					<NavBar />
					<Component {...pageProps} />
				</div>
			</AuthProvider>
		</QueryClientProvider>
	);
}

export default MyApp;
