import { Provider } from "react-redux";
import { store } from "./redux/store";
import { DictionaryElement, Container } from "./styles/components";
import GlobalStyles from "./styles/global";
import { Header } from "./components/Header";

export default function App() {
  return (
    <Provider store={store}>
      <DictionaryElement>
        <Container>
          <Header />
        </Container>
      </DictionaryElement>
      <GlobalStyles />
    </Provider>
  );
}
