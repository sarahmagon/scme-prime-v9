import '../styles/globals.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function App({ Component, pageProps }) {
  return (
    <div className="sp-root">
      <Header />
      <div className="sp-layout">
        <Sidebar />
        <main className="sp-main" id="main-content">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}
