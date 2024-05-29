import { useSelector } from "react-redux";
import { DictionaryElement, Container } from "../styles/App.styled";
import { IWord, selectWord } from "../redux/wordSlice";

import { Header } from "./Header";
import { Search } from "./Search";
import Meaning from "./meaning";

export function Dictionary() {
  const words: IWord[] = useSelector(selectWord);
  return (
    <DictionaryElement>
      <Container>
        <Header />
        <Search />
        {words.length > 0 && <Meaning words={words} />}
      </Container>
    </DictionaryElement>
  );
}
