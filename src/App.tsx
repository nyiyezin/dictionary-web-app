import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { persistor, store } from "./redux/store";
import GlobalStyles from "./styles/global";
import { DictionaryElement, Container } from "./styles/App.styled";

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
