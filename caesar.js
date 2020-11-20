const caesar = function (string, shift) {
  let alphabet; // support custom alphabet
  let caseSize; // set the wrapping point between upper/lower

  // Change alphabet set if scandinavian letters are present for the fun of it
  if (string.match(/[åäö]/i)) {
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖabcdefghijklmnopqrstuvwxyzåäö";
    caseSize = alphabet.length / 2;
  } else {
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    caseSize = alphabet.length / 2;
  }

  // Deal with negative shifts
  if (shift < 0) return caesar(string, shift + caseSize);

  // Default case
  return string
    .split("")
    .map((char) => shiftChar(char, shift, alphabet, caseSize))
    .join("");
};

const shiftChar = (char, shift, alphabet, caseSize) => {
  // check for upper and lower case
  const charSet = (index) => (index < caseSize ? 0 : caseSize);
  // check alphabet to ignore punctuation and special characters
  if (alphabet.includes(char)) {
    // get index of character for shift and lowercase/uppercase
    const index = alphabet.indexOf(char);
    // shift within the uppercase or lowercase set and wrap based on caseSize
    const shiftedIndex = (index) =>
      ((index - charSet(index) + shift) % caseSize) + charSet(index);
    return alphabet[shiftedIndex(index)];
  } else {
    // return special characters as is
    return char;
  }
};

module.exports = { caesar };
