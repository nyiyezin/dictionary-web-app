import { useSelector } from "react-redux";
import { Header } from "./Header";
import { Search } from "./Search";
import { Word } from "./Word";
import { DictionaryElement, Container } from "../styles/App.styled";
import { selectWord } from "../redux/wordSlice";

export function Dictionary() {
  const words = useSelector(selectWord);
  return (
    <DictionaryElement>
      <Container>
        <Header />
        <Search />
        {words.length > 0 &&
          words.map((word, index) => {
            return (
              <Word
                key={index}
                word={word}
              />
            );
          })}
      </Container>
    </DictionaryElement>
  );
}
