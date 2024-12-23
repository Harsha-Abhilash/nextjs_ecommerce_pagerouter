import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CartContextProvider from "./Context/cartcontextprovider";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return<CartContextProvider> 
    <Header></Header>
    <Component {...pageProps} />
    <Footer></Footer>
    </CartContextProvider>;
}
