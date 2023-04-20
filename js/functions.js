// Функция для проверки длины строки //
const lenghtCompare = function (str, maxlong) {
  str = String(str);
  return (str.length <= maxlong) ? true : false
};


//Функция для проверки, является ли строка палиндромом //
const palindromeCheck = function (str) {
  let hf = (Math.floor(str.length/2));
  for (let i = 0; i < hf; i++){
    if (str[i] !== str[str.length-1-i]){
      return false;
    };
  }; return true;
};

/* Функция, которая принимает строку,
извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа */
const getNumber = function (str) {
  str = str.replaceAll(' ', '');
  let numbString = '';
  for (let i = 0; i <= str.length-1; i++){
      if (isNaN(Number(str[i])) != true ){
          numbString = numbString + str[i];
      };
  };
  if (numbString == ''){
      return NaN
  } else {
     return numbString;
  };
};


/*Функция, которая принимает три параметра: исходную строку,
минимальную длину и строку с добавочными символами — и возвращает исходную строку,
дополненную указанными символами до заданной длины.  */
const totalStrings = function (str,long,addStr){
  let totalStr = str.padStart(long, addStr);
  return totalStr;
};
