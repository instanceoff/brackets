module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {
    const brack = bracketsConfig[i].join('');
    if (str.includes(brack)){
      str = str.replace(brack, '');
      i = -1;
    }
  }
  return !str;
}