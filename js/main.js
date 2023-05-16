// Массив текста комментария — message  //
const massageTextArray = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const namesАrray = [
  'Михаил',
  'Анатолий',
  'Тимур',
  'Евгений',
  'Ольга',
  'Даша'
];

const descriptionArray = [
  'Мы на море!',
  'Музон',
  'Супер кар!!',
  'Вот такой завтрак',
  'Что это?',
  'В полет!',
  'Ну как-то так...'
];

// Функция генерации случайного числа //
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


// Создание объекта для комментария //
const createCommentText = function(indexComment){
  return {
    id:indexComment,
    avatar:'img/avatar-' + getRandomInteger(1,6) + '.svg',
    message:massageTextArray[getRandomInteger(0, massageTextArray.length - 1)],
    name:namesАrray[getRandomInteger(0, namesАrray.length - 1)]
  };
};

// Создание одного экземпляра объекта для фото //
const createPicture = function(indexPhoto){
  const ArrayComments = [];
  for (let j = 0; j < getRandomInteger(0,2); j++){
    ArrayComments[j] = createCommentText(indexPhoto + j);
  }
  return {
    id:indexPhoto,
    url:'photos/' + indexPhoto + '.jpg',
    description:descriptionArray[getRandomInteger(0,descriptionArray.length - 1)],
    likes:getRandomInteger(15,200),
    comments:ArrayComments
  };
};


// Создание массива объектов фото //
const ArrayPhoto = [];
for(let i = 0; i < 25; i++){
  ArrayPhoto[i] = createPicture(i + 1);
}
