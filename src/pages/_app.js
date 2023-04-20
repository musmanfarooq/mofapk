import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/index.js";
import Header from "@/components/Header.js";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}
