import {
  PartOfSpeech,
  PartOfSpeechTitle,
  HorizontalLine,
  MeaningWrapper,
  MeaningTitle,
  Definitions,
  DefinitionWrapper,
  DefinitionItem,
  DefinitionExample,
  VariantWrapper,
  VariantTitle,
  VariantWords,
  VariantLink,
} from "../styles/Meanings.styled";
import { useAppDispatch } from "../redux/store";
import { setSearchValue } from "../redux/searchSlice";
import { fetchWords } from "../redux/wordSliceFetchAsync";
import { url } from "../api/index";

interface IMeaning {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example: string;
}

interface IMeanings {
  partOfSpeech: string;
  definitions: IMeaning[];
  synonyms: string[];
  antonyms: string[];
}

interface MeaningsProps {
  meanings: IMeanings[];
}

export function Meanings({ meanings }: MeaningsProps) {
  const dispatch = useAppDispatch();

  const handleClick: React.MouseEventHandler<HTMLParagraphElement> = (e) => {
    const searchValue = (e.target as HTMLElement).innerHTML.replace(",", "");
    dispatch(setSearchValue(searchValue));
    dispatch(fetchWords({ url, searchValue }));
  };

  return (
    <>
      {meanings.map((item, index) => (
        <PartOfSpeech key={index}>
          <PartOfSpeechTitle>
            {item.partOfSpeech}
            <HorizontalLine />
          </PartOfSpeechTitle>

          <MeaningWrapper>
            <MeaningTitle>Meaning</MeaningTitle>
            <Definitions>
              {item.definitions.map((item, index) => (
                <DefinitionWrapper key={index}>
                  {item.definition && (
                    <DefinitionItem>{item.definition}</DefinitionItem>
                  )}
                  {item.example && (
                    <DefinitionExample>"{item.example}"</DefinitionExample>
                  )}
                </DefinitionWrapper>
              ))}
            </Definitions>
          </MeaningWrapper>

          {item.synonyms.length > 0 && (
            <VariantWrapper>
              <VariantTitle>Synonyms</VariantTitle>
              <VariantWords>
                {item.synonyms.map((word, index, arr) => (
                  <VariantLink
                    onClick={handleClick}
                    key={word}>
                    {word}
                    {index === arr.length - 1 ? "  " : ","}
                  </VariantLink>
                ))}
              </VariantWords>
            </VariantWrapper>
          )}

          {item.antonyms.length > 0 && (
            <VariantWrapper>
              <VariantTitle>Antonyms</VariantTitle>
              <VariantWords>
                {item.antonyms.map((word, index, arr) => (
                  <VariantLink
                    onClick={handleClick}
                    key={word}>
                    {word}
                    {index === arr.length - 1 ? "  " : ","}
                  </VariantLink>
                ))}
              </VariantWords>
            </VariantWrapper>
          )}
        </PartOfSpeech>
      ))}
    </>
  );
}

export default Meanings;
