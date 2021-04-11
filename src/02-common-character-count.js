function getCommonCharacterCount(str1, str2) {
  const one = str1.split('');
  const two = str2.split('');
  let counter = 0;
  let count;
  let i;

  for (i = 0; i < one.length; i++) {
    if (two.includes(one[i])) {
      count = two.indexOf(one[i]);
      two.splice(count, 1);
      counter++;
    }
  }
  return counter;
}

module.exports = getCommonCharacterCount;
