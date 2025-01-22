// bookInfo.js
const bookInfo = {
  title: 'Le Seigneur des Anneaux',
  author: 'J.R.R. Tolkien',
  year: 1954
};

module.exports = bookInfo;



// app.js
const bookInfo = require('./bookInfo');

console.log('Titre :', bookInfo.title);
console.log('Auteur :', bookInfo.author);
console.log('Année de Publication :', bookInfo.year);

test
test
test