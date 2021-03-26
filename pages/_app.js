import "../styles/globals.css";
import Layout from "../components/Layout";
import { GlobalProvider } from "../context/context";
function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
