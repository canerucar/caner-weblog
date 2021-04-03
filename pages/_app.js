import '../styles/global.css';
import Header from '../components/header';

function MyApp({ Component, pageProps }) {
  return (
    <div className="antialiased text-gray-700 mx-3">
    <Header></Header>
      <main className="my-6">
        <Component {...pageProps} />
      </main>
    </div>
  ); 
}

export default MyApp;
