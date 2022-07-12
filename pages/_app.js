import "../styles/globals.css";
import reducer, { initialState } from "../states/reducer";
import { StateProvider } from "../states/StateProvider";
function MyApp({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default MyApp;
