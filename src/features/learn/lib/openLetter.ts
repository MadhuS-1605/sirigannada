import { createContext } from "react";

/** Lets any letter tile open the alphabet page's single letter popup (AlphabetView owns it). */
export const OpenLetterContext = createContext<(glyph: string) => void>(() => {});
