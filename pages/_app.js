import '../styles/global.css';
import Header from '../components/header';
import { Auth0Provider } from '@auth0/auth0-react';

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="canerucar.us.auth0.com"
      clientId="4K5RR6211QF0ztz0vouqaAy3zk7o4Nf6"
      redirectUri={process.env.NEXT_PUBLIC_URL}
    >
      <div className="antialiased text-gray-700">
        <Header></Header>
        <main className="my-6">
          <Component {...pageProps} />
        </main>
      </div>
    </Auth0Provider>
  ); 
}

export default MyApp;
