const Book = require('./bookModel'); 

async function defaultPopulate() {
  await Book.create({
    title: 'Harry Potter and the philosopher\'s stone',
    author: 'J.K Rowling',
    year: 1997
  });

  await Book.create({
    title: 'Lalka',
    author: 'Bolesław Prus',
    year: 1890
  });

  await Book.create({
    title: 'Zbrodnia i kara',
    author: 'Fryderyk Nietchsze',
    year: 1866  
  });

  console.log("Default data populated");
}

defaultPopulate().catch(console.error);