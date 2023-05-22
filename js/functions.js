// Функция для проверки длины строки //
const checkLength = function (str, maxLength) {
  return str.length <= maxLength;
};
checkLength ();

//Функция для проверки, является ли строка палиндромом //
const checkPalindrome = function (str) {
  const residue = Math.floor(str.length / 2);
  for (let i = 0; i < residue; i++){
    if (str[i] !== str[str.length - 1 - i]){
      return false;
    }
  } return true;
};
checkPalindrome();

/* Функция, которая принимает строку,
извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа */
const getIntegersFromString = function (str) {
  let integers = '';
  for (let i = 0; i <= str.length - 1; i++){
    if (!isNaN(Number(str[i]))){
      integers += str[i];
    }
  }
  return integers === '' ? NaN : integers;
};
getIntegersFromString ();

/*Функция, которая принимает три параметра: исходную строку,
минимальную длину и строку с добавочными символами — и возвращает исходную строку,
дополненную указанными символами до заданной длины.  */
const extendString = function (str,minLength,addStr){
  return str.padStart(minLength, addStr);
};
extendString();

// Функция генерации случайного числа //
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
getRandomInteger();
