/**
 * Capitalizes each word of the sentence. Uses the separator " " (space between words, doesn't work with dash "-")
 * @param sentence The sentence we want to transform (ex: "the amazing spider-man")
 * @returns The fully capitalized sentence (ex: "The Amazing Spider-man")
 */
export const capitalizeSentence = (sentence: string): string => {
  return sentence
    .split(' ')
    .map((word: string) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};
