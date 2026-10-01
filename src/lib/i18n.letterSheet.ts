/**
 * Strings for the alphabet letter popup (handwriting animation, sound, words that begin with it),
 * kept in their own module so `i18n.ts` stays small. Spread into `strings` in `i18n.ts` — always
 * go through `t("letterSheetHear")` etc. from there, never import this file directly.
 */
export const letterSheetStrings = {
  letterSheetOpen: { kn: "{letter} ಕಲಿಯಿರಿ", en: "Learn {letter}" },
  letterSheetTitle: { kn: "{letter} ಅಕ್ಷರ", en: "The letter {letter}" },
  letterSheetPrevious: { kn: "ಹಿಂದಿನ ಅಕ್ಷರ", en: "Previous letter" },
  letterSheetNext: { kn: "ಮುಂದಿನ ಅಕ್ಷರ", en: "Next letter" },
  letterSheetHear: { kn: "ಕೇಳಿ", en: "Hear it" },
  letterSheetShare: { kn: "ಹಂಚಿ", en: "Share" },
  letterSheetShareImage: { kn: "ಚಿತ್ರವಾಗಿ", en: "As image" },
  letterSheetShareVideo: { kn: "ವಿಡಿಯೋ ಆಗಿ", en: "As video" },
  letterSheetMakingVideo: { kn: "ವಿಡಿಯೋ ಸಿದ್ಧವಾಗುತ್ತಿದೆ…", en: "Making video…" },
  letterSheetDownloadVideo: { kn: "ವಿಡಿಯೋ ಡೌನ್‌ಲೋಡ್", en: "Download video" },
  letterSheetVideoFailed: { kn: "ವಿಡಿಯೋ ಮಾಡಲಾಗಲಿಲ್ಲ", en: "Couldn’t make the video" },
  letterSheetWords: { kn: "ಈ ಅಕ್ಷರದಿಂದ ಶುರುವಾಗುವ ಪದಗಳು", en: "Words that begin with it" },
  letterSheetNoWords: { kn: "ಈ ಅಕ್ಷರದಿಂದ ಶುರುವಾಗುವ ದಿನಬಳಕೆಯ ಪದಗಳು ಇಲ್ಲ.", en: "No everyday word begins with this letter." },
  letterSheetAnimationBy: { kn: "ಬರಹ: Gopala Krishna A", en: "Animation: Gopala Krishna A" },
  letterSheetVoiceBy: { kn: "ಧ್ವನಿ: Surabhi18", en: "Voice: Surabhi18" },
  creditsLettersTitle: { kn: "ವರ್ಣಮಾಲೆ: ಬರಹ ಮತ್ತು ಧ್ವನಿ", en: "Alphabet: handwriting and sounds" },
  creditsLettersBody: {
    kn: "ಅಕ್ಷರಗಳನ್ನು ಬರೆಯುವ ಅನಿಮೇಷನ್‌ಗಳು Gopala Krishna A ಅವರದು; ಉಚ್ಚಾರದ ಧ್ವನಿಮುದ್ರಣಗಳು Surabhi18 ಅವರದು. ಎರಡೂ ವಿಕಿಮೀಡಿಯ ಕಾಮನ್ಸ್‌ನಿಂದ, CC BY-SA 4.0 ಪರವಾನಗಿಯಲ್ಲಿ.",
    en: "Letter-writing animations by Gopala Krishna A and pronunciation recordings by Surabhi18, both from Wikimedia Commons under CC BY-SA 4.0.",
  },
} as const;
