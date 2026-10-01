/**
 * A few everyday words that begin with each letter, for the alphabet popup. Original curated
 * list (not taken from any textbook). A word may start with any vowel-sign form of a consonant
 * (ಕಾಗೆ for ಕ) but never with a conjunct. Letters no everyday word begins with (ಙ, ಞ, ಣ, ಳ,
 * the yogavāha, Sanskrit vocalics, archaic letters) are simply absent.
 *
 * `picture` names an illustration under public/learn/words/ (cropped from an AI-generated picture
 * grid supplied by the maintainer); words without one show text only.
 */
export interface LetterWord {
  word: string;
  en: string;
  picture?: string;
}

export const wordPictureSrc = (picture: string) => `/learn/words/${picture}.webp`;

export const LETTER_WORDS: Readonly<Record<string, readonly LetterWord[]>> = {
  ಅ: [{ word: "ಅಮ್ಮ", en: "mother", picture: "amma" }, { word: "ಅಪ್ಪ", en: "father", picture: "appa" }, { word: "ಅರಮನೆ", en: "palace", picture: "aramane" }],
  ಆ: [{ word: "ಆನೆ", en: "elephant", picture: "aane" }, { word: "ಆಕಾಶ", en: "sky", picture: "aakaasha" }, { word: "ಆಟ", en: "game", picture: "aata" }],
  ಇ: [{ word: "ಇಲಿ", en: "mouse", picture: "ili" }, { word: "ಇರುವೆ", en: "ant", picture: "iruve" }, { word: "ಇಡ್ಲಿ", en: "idli", picture: "idli" }],
  ಈ: [{ word: "ಈಜು", en: "swim", picture: "iiju" }, { word: "ಈರುಳ್ಳಿ", en: "onion", picture: "iirulli" }, { word: "ಈಗ", en: "now", picture: "iiga" }],
  ಉ: [{ word: "ಉಪ್ಪು", en: "salt", picture: "uppu" }, { word: "ಉಂಗುರ", en: "ring", picture: "ungura" }, { word: "ಉಡುಪು", en: "clothes", picture: "udupu" }],
  ಊ: [{ word: "ಊಟ", en: "meal", picture: "uuta" }, { word: "ಊರು", en: "village, town", picture: "uuru" }, { word: "ಊದು", en: "blow", picture: "uudu" }],
  ಋ: [{ word: "ಋತು", en: "season", picture: "rutu" }, { word: "ಋಷಿ", en: "sage", picture: "rushi" }],
  ಎ: [{ word: "ಎಲೆ", en: "leaf", picture: "ele" }, { word: "ಎತ್ತು", en: "ox", picture: "ettu" }, { word: "ಎರಡು", en: "two", picture: "eradu" }],
  ಏ: [{ word: "ಏಣಿ", en: "ladder", picture: "eeni" }, { word: "ಏಡಿ", en: "crab", picture: "eedi" }, { word: "ಏಳು", en: "seven", picture: "eelu" }],
  ಐ: [{ word: "ಐದು", en: "five", picture: "aidu" }, { word: "ಐವತ್ತು", en: "fifty", picture: "aivattu" }],
  ಒ: [{ word: "ಒಂಟೆ", en: "camel", picture: "onte" }, { word: "ಒಂದು", en: "one", picture: "ondu" }, { word: "ಒಲೆ", en: "stove", picture: "ole" }],
  ಓ: [{ word: "ಓದು", en: "read", picture: "oodu" }, { word: "ಓಟ", en: "race", picture: "oota" }, { word: "ಓಲೆ", en: "earring", picture: "oole" }],
  ಔ: [{ word: "ಔಷಧ", en: "medicine", picture: "aushadha" }, { word: "ಔತಣ", en: "feast", picture: "autana" }],
  ಕ: [{ word: "ಕಮಲ", en: "lotus", picture: "kamala" }, { word: "ಕಾಗೆ", en: "crow", picture: "kaage" }, { word: "ಕೋತಿ", en: "monkey", picture: "koothi" }],
  ಖ: [{ word: "ಖಾರ", en: "spicy", picture: "khaara" }, { word: "ಖುಷಿ", en: "joy", picture: "khushi" }],
  ಗ: [{ word: "ಗಿಳಿ", en: "parrot", picture: "gili" }, { word: "ಗಡಿಯಾರ", en: "clock", picture: "gadiyaara" }, { word: "ಗೂಡು", en: "nest", picture: "goodu" }],
  ಘ: [{ word: "ಘಂಟೆ", en: "bell", picture: "ghante" }, { word: "ಘರ್ಜನೆ", en: "roar", picture: "gharjane" }],
  ಚ: [{ word: "ಚಮಚ", en: "spoon", picture: "chamacha" }, { word: "ಚಿಟ್ಟೆ", en: "butterfly", picture: "chitte" }, { word: "ಚಂದ್ರ", en: "moon", picture: "chandra" }],
  ಛ: [{ word: "ಛತ್ರಿ", en: "umbrella", picture: "chhatri" }, { word: "ಛಾವಣಿ", en: "roof", picture: "chhaavani" }],
  ಜ: [{ word: "ಜಿಂಕೆ", en: "deer", picture: "jinke" }, { word: "ಜೇನು", en: "honey", picture: "jeenu" }, { word: "ಜೋಳ", en: "maize", picture: "jola" }],
  ಝ: [{ word: "ಝರಿ", en: "stream", picture: "jhari" }],
  ಟ: [{ word: "ಟೋಪಿ", en: "cap", picture: "toopi" }, { word: "ಟಗರು", en: "ram", picture: "tagaru" }, { word: "ಟೊಮೆಟೊ", en: "tomato", picture: "tomato" }],
  ಠ: [{ word: "ಠಾಣೆ", en: "police station", picture: "thaane" }],
  ಡ: [{ word: "ಡಬ್ಬಿ", en: "box", picture: "dabbi" }, { word: "ಡೋಲು", en: "drum", picture: "dolu" }],
  ಢ: [{ word: "ಢಕ್ಕೆ", en: "big drum", picture: "dhakke" }],
  ತ: [{ word: "ತಲೆ", en: "head", picture: "tale" }, { word: "ತಾಯಿ", en: "mother", picture: "taayi" }, { word: "ತೆಂಗು", en: "coconut palm", picture: "tengu" }],
  ಥ: [{ word: "ಥಟ್ಟನೆ", en: "suddenly", picture: "thattane" }],
  ದ: [{ word: "ದೀಪ", en: "lamp", picture: "deepa" }, { word: "ದೋಣಿ", en: "boat", picture: "doni" }, { word: "ದನ", en: "cattle", picture: "dana" }],
  ಧ: [{ word: "ಧನ", en: "wealth", picture: "dhana" }, { word: "ಧೂಳು", en: "dust", picture: "dhoolu" }, { word: "ಧೈರ್ಯ", en: "courage", picture: "dhairya" }],
  ನ: [{ word: "ನವಿಲು", en: "peacock", picture: "navilu" }, { word: "ನಾಯಿ", en: "dog", picture: "naayi" }, { word: "ನೀರು", en: "water", picture: "neeru" }],
  ಪ: [{ word: "ಪುಸ್ತಕ", en: "book", picture: "pustaka" }, { word: "ಪಾಠ", en: "lesson", picture: "paatha" }, { word: "ಪಂಜರ", en: "cage", picture: "panjara" }],
  ಫ: [{ word: "ಫಲ", en: "fruit", picture: "phala" }, { word: "ಫಲಕ", en: "signboard", picture: "phalaka" }],
  ಬ: [{ word: "ಬೆಕ್ಕು", en: "cat", picture: "bekku" }, { word: "ಬಣ್ಣ", en: "colour", picture: "banna" }, { word: "ಬಾಳೆಹಣ್ಣು", en: "banana", picture: "baalehannu" }],
  ಭ: [{ word: "ಭೂಮಿ", en: "earth", picture: "bhoomi" }, { word: "ಭಾರತ", en: "India", picture: "bhaarata" }, { word: "ಭಯ", en: "fear", picture: "bhaya" }],
  ಮ: [{ word: "ಮನೆ", en: "house", picture: "mane" }, { word: "ಮರ", en: "tree", picture: "mara" }, { word: "ಮೀನು", en: "fish", picture: "miinu" }],
  ಯ: [{ word: "ಯಾರು", en: "who", picture: "yaaru" }, { word: "ಯಂತ್ರ", en: "machine", picture: "yantra" }, { word: "ಯೋಗ", en: "yoga", picture: "yoga" }],
  ರ: [{ word: "ರಾಜ", en: "king", picture: "raaja" }, { word: "ರೈತ", en: "farmer", picture: "raita" }, { word: "ರಥ", en: "chariot", picture: "ratha" }],
  ಲ: [{ word: "ಲಡ್ಡು", en: "laddu", picture: "laddu" }, { word: "ಲೋಟ", en: "tumbler", picture: "loota" }],
  ವ: [{ word: "ವೀಣೆ", en: "veena", picture: "veene" }, { word: "ವಾರ", en: "week", picture: "vaara" }, { word: "ವರ್ಷ", en: "year", picture: "varsha" }],
  ಶ: [{ word: "ಶಾಲೆ", en: "school", picture: "shaale" }, { word: "ಶಂಖ", en: "conch", picture: "shankha" }],
  ಷ: [{ word: "ಷಟ್ಕೋನ", en: "hexagon", picture: "shatkoona" }],
  ಸ: [{ word: "ಸೂರ್ಯ", en: "sun", picture: "suurya" }, { word: "ಸೇಬು", en: "apple", picture: "seebu" }, { word: "ಸಮುದ್ರ", en: "sea", picture: "samudra" }],
  ಹ: [{ word: "ಹಸು", en: "cow", picture: "hasu" }, { word: "ಹಾವು", en: "snake", picture: "haavu" }, { word: "ಹೂವು", en: "flower", picture: "huuvu" }],
};
