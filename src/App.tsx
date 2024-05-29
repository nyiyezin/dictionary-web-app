import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { DictionaryElement, Container } from "./styles/components";
import GlobalStyles from "./styles/global";
import { Header } from "./components/Header";
import { PersistGate } from "redux-persist/integration/react";
import Search from "./components/Search";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <DictionaryElement>
          <Container>
            <Header />
            <Search />
          </Container>
        </DictionaryElement>
        <GlobalStyles />
      </PersistGate>
    </Provider>
  );
}
