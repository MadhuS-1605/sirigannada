/**
 * A few everyday words that begin with each letter, for the alphabet popup. Original curated
 * list (not taken from any textbook). A word may start with any vowel-sign form of a consonant
 * (ಕಾಗೆ for ಕ) but never with a conjunct. Letters no everyday word begins with (ಙ, ಞ, ಣ, ಳ,
 * the yogavāha, Sanskrit vocalics, archaic letters) are simply absent.
 */
export interface LetterWord {
  word: string;
  en: string;
}

export const LETTER_WORDS: Readonly<Record<string, readonly LetterWord[]>> = {
  ಅ: [{ word: "ಅಮ್ಮ", en: "mother" }, { word: "ಅಪ್ಪ", en: "father" }, { word: "ಅರಮನೆ", en: "palace" }],
  ಆ: [{ word: "ಆನೆ", en: "elephant" }, { word: "ಆಕಾಶ", en: "sky" }, { word: "ಆಟ", en: "game" }],
  ಇ: [{ word: "ಇಲಿ", en: "mouse" }, { word: "ಇರುವೆ", en: "ant" }, { word: "ಇಡ್ಲಿ", en: "idli" }],
  ಈ: [{ word: "ಈಜು", en: "swim" }, { word: "ಈರುಳ್ಳಿ", en: "onion" }, { word: "ಈಗ", en: "now" }],
  ಉ: [{ word: "ಉಪ್ಪು", en: "salt" }, { word: "ಉಂಗುರ", en: "ring" }, { word: "ಉಡುಪು", en: "clothes" }],
  ಊ: [{ word: "ಊಟ", en: "meal" }, { word: "ಊರು", en: "village, town" }, { word: "ಊದು", en: "blow" }],
  ಋ: [{ word: "ಋತು", en: "season" }, { word: "ಋಷಿ", en: "sage" }],
  ಎ: [{ word: "ಎಲೆ", en: "leaf" }, { word: "ಎತ್ತು", en: "ox" }, { word: "ಎರಡು", en: "two" }],
  ಏ: [{ word: "ಏಣಿ", en: "ladder" }, { word: "ಏಡಿ", en: "crab" }, { word: "ಏಳು", en: "seven" }],
  ಐ: [{ word: "ಐದು", en: "five" }, { word: "ಐವತ್ತು", en: "fifty" }],
  ಒ: [{ word: "ಒಂಟೆ", en: "camel" }, { word: "ಒಂದು", en: "one" }, { word: "ಒಲೆ", en: "stove" }],
  ಓ: [{ word: "ಓದು", en: "read" }, { word: "ಓಟ", en: "race" }, { word: "ಓಲೆ", en: "earring" }],
  ಔ: [{ word: "ಔಷಧ", en: "medicine" }, { word: "ಔತಣ", en: "feast" }],
  ಕ: [{ word: "ಕಮಲ", en: "lotus" }, { word: "ಕಾಗೆ", en: "crow" }, { word: "ಕೋತಿ", en: "monkey" }],
  ಖ: [{ word: "ಖಾರ", en: "spicy" }, { word: "ಖುಷಿ", en: "joy" }],
  ಗ: [{ word: "ಗಿಳಿ", en: "parrot" }, { word: "ಗಡಿಯಾರ", en: "clock" }, { word: "ಗೂಡು", en: "nest" }],
  ಘ: [{ word: "ಘಂಟೆ", en: "bell" }, { word: "ಘರ್ಜನೆ", en: "roar" }],
  ಚ: [{ word: "ಚಮಚ", en: "spoon" }, { word: "ಚಿಟ್ಟೆ", en: "butterfly" }, { word: "ಚಂದ್ರ", en: "moon" }],
  ಛ: [{ word: "ಛತ್ರಿ", en: "umbrella" }, { word: "ಛಾವಣಿ", en: "roof" }],
  ಜ: [{ word: "ಜಿಂಕೆ", en: "deer" }, { word: "ಜೇನು", en: "honey" }, { word: "ಜೋಳ", en: "maize" }],
  ಝ: [{ word: "ಝರಿ", en: "stream" }],
  ಟ: [{ word: "ಟೋಪಿ", en: "cap" }, { word: "ಟಗರು", en: "ram" }, { word: "ಟೊಮೆಟೊ", en: "tomato" }],
  ಠ: [{ word: "ಠಾಣೆ", en: "police station" }],
  ಡ: [{ word: "ಡಬ್ಬಿ", en: "box" }, { word: "ಡೋಲು", en: "drum" }],
  ಢ: [{ word: "ಢಕ್ಕೆ", en: "big drum" }],
  ತ: [{ word: "ತಲೆ", en: "head" }, { word: "ತಾಯಿ", en: "mother" }, { word: "ತೆಂಗು", en: "coconut palm" }],
  ಥ: [{ word: "ಥಟ್ಟನೆ", en: "suddenly" }],
  ದ: [{ word: "ದೀಪ", en: "lamp" }, { word: "ದೋಣಿ", en: "boat" }, { word: "ದನ", en: "cattle" }],
  ಧ: [{ word: "ಧನ", en: "wealth" }, { word: "ಧೂಳು", en: "dust" }, { word: "ಧೈರ್ಯ", en: "courage" }],
  ನ: [{ word: "ನವಿಲು", en: "peacock" }, { word: "ನಾಯಿ", en: "dog" }, { word: "ನೀರು", en: "water" }],
  ಪ: [{ word: "ಪುಸ್ತಕ", en: "book" }, { word: "ಪಾಠ", en: "lesson" }, { word: "ಪಂಜರ", en: "cage" }],
  ಫ: [{ word: "ಫಲ", en: "fruit" }, { word: "ಫಲಕ", en: "signboard" }],
  ಬ: [{ word: "ಬೆಕ್ಕು", en: "cat" }, { word: "ಬಣ್ಣ", en: "colour" }, { word: "ಬಾಳೆಹಣ್ಣು", en: "banana" }],
  ಭ: [{ word: "ಭೂಮಿ", en: "earth" }, { word: "ಭಾರತ", en: "India" }, { word: "ಭಯ", en: "fear" }],
  ಮ: [{ word: "ಮನೆ", en: "house" }, { word: "ಮರ", en: "tree" }, { word: "ಮೀನು", en: "fish" }],
  ಯ: [{ word: "ಯಾರು", en: "who" }, { word: "ಯಂತ್ರ", en: "machine" }, { word: "ಯೋಗ", en: "yoga" }],
  ರ: [{ word: "ರಾಜ", en: "king" }, { word: "ರೈತ", en: "farmer" }, { word: "ರಥ", en: "chariot" }],
  ಲ: [{ word: "ಲಡ್ಡು", en: "laddu" }, { word: "ಲೋಟ", en: "tumbler" }],
  ವ: [{ word: "ವೀಣೆ", en: "veena" }, { word: "ವಾರ", en: "week" }, { word: "ವರ್ಷ", en: "year" }],
  ಶ: [{ word: "ಶಾಲೆ", en: "school" }, { word: "ಶಂಖ", en: "conch" }],
  ಷ: [{ word: "ಷಟ್ಕೋನ", en: "hexagon" }],
  ಸ: [{ word: "ಸೂರ್ಯ", en: "sun" }, { word: "ಸೇಬು", en: "apple" }, { word: "ಸಮುದ್ರ", en: "sea" }],
  ಹ: [{ word: "ಹಸು", en: "cow" }, { word: "ಹಾವು", en: "snake" }, { word: "ಹೂವು", en: "flower" }],
};
