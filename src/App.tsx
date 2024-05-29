import { Provider } from "react-redux";
import { store } from "./redux/store";
import GlobalStyles from "./styles/global";

export default function App() {
  return (
    <Provider store={store}>
      <main>
        <h1>Hello World!</h1>
      </main>
      <GlobalStyles />
    </Provider>
  );
}
