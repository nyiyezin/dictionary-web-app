import { useSelector } from "react-redux";
import { Header } from "./Header";
import { Search } from "./Search";
import { Word } from "./Word";
import { DictionaryElement, Container } from "../styles/App.styled";
import { selectWord, selectStatus } from "../redux/wordSlice";
import { NotFound } from "./NotFound";

export function Dictionary() {
  const data = useSelector(selectWord);
  const status = useSelector(selectStatus);
  return (
    <DictionaryElement>
      <Container>
        <Header />
        <Search />
        {data.length > 0 &&
          data.map((word, index) => {
            return (
              <Word
                key={index}
                word={word}
              />
            );
          })}
        {status === "error" && <NotFound />}
      </Container>
    </DictionaryElement>
  );
}
