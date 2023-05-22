// Массив текста комментария — message  //
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Михаил',
  'Анатолий',
  'Тимур',
  'Евгений',
  'Ольга',
  'Даша'
];

const descriptions = [
  'Мы на море!',
  'Музон',
  'Супер кар!!',
  'Вот такой завтрак',
  'Что это?',
  'В полет!',
  'Ну как-то так...'
];

import { getRandomInteger } from './functions.js';

// Создание объекта для комментария //
const createComment = function(index){
  return {
    id:index,
    avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
    message:messages[getRandomInteger(0, messages.length - 1)],
    name:names[getRandomInteger(0, names.length - 1)]
  };
};

// Создание одного экземпляра объекта для фото //
const createPicture = function(index){
  const comments = [];
  for (let j = 0; j < getRandomInteger(0,2); j++){
    comments[j] = createComment(index + j);
  }
  return {
    id:index,
    url:`photos/${index}.jpg`,
    description:descriptions[getRandomInteger(0,descriptions.length - 1)],
    likes:getRandomInteger(15,200),
    comments:comments
  };
};


// Создание массива объектов фото //
const pictures = [];
for(let i = 0; i < 25; i++){
  pictures.push(createPicture(i + 1));
}
