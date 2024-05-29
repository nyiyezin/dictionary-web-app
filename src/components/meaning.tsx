import { useRef } from "react";
import {
  MeaningElement,
  PhoneticWrapper,
  WordWrapper,
  NormalWord,
  PhoneticWord,
  PlayButton,
  Source,
  SourceWrapper,
  SourceTitle,
  SourceUrlsUl,
  SourceUrlsLi,
  Url,
} from "../styles/Meaning.styled";
import { Meanings } from "./meanings";
import { IWord } from "../redux/wordSlice";
import { ExternalLink, Play } from "lucide-react";

interface IMeaningProps {
  words: IWord[];
}

export function Meaning({ words }: IMeaningProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [{ word, phonetic, phonetics, meanings, sourceUrls }] = words;

  const audio = phonetics.filter((e) => e.audio !== "").map((e) => e.audio);
  const uk = audio.find((e) => e.endsWith("uk.mp3"));
  const us = audio.find((e) => e.endsWith("us.mp3"));
  const sortAudio = uk || us;

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <MeaningElement>
      <PhoneticWrapper>
        <WordWrapper>
          <NormalWord>{word}</NormalWord>
          {phonetic && <PhoneticWord>{phonetic}</PhoneticWord>}
        </WordWrapper>
        {sortAudio && (
          <PlayButton onClick={playAudio}>
            <Play />
          </PlayButton>
        )}
        <audio
          ref={audioRef}
          src={sortAudio}
        />
      </PhoneticWrapper>

      <Meanings meanings={meanings} />

      <Source>
        <SourceWrapper>
          <SourceTitle>Source</SourceTitle>
          <SourceUrlsUl>
            {sourceUrls.map((url, index) => (
              <SourceUrlsLi key={index}>
                <Url
                  href={url}
                  target="_blank">
                  {url}
                </Url>
                <ExternalLink />
              </SourceUrlsLi>
            ))}
          </SourceUrlsUl>
        </SourceWrapper>
      </Source>
    </MeaningElement>
  );
}

export default Meaning;
