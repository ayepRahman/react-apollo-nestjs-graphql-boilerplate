export default (value: number, word: string, suffix: string = 's') => {
  if (value === 1) {
    return `${value} ${word}`;
  } else {
    return `${value} ${word}${suffix}`;
  }
};
