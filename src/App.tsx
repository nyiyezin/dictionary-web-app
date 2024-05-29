import { Provider } from "react-redux";
import { store } from "./redux/store";
import { DictionaryElement, Container } from "./styles/components";
import GlobalStyles from "./styles/global";

export default function App() {
  return (
    <Provider store={store}>
      <DictionaryElement>
        <Container></Container>
      </DictionaryElement>
      <GlobalStyles />
    </Provider>
  );
}
