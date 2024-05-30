import { FontText } from "./types";

export interface IFontsFamily {
  text: FontText;
  font: string;
}

export const fontsFamily: IFontsFamily[] = [
  { text: "Sans Serif", font: "--family-sans-serif" },
  { text: "Serif", font: "--family-serif" },
  { text: "Mono", font: "--family-monospace" },
];
