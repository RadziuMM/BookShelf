import genBookshelf from "./genBookshelf.js";

let visableBooks = [];
const tagName = [
  "javascript",
  "fundamentals",
  "advanced",
  "css",
  "accessibility",
  "svg",
  "architecture",
];

export default function filter(tags, price, books, authors) {
  //checking tags and price filter/setting books to show(obj.visable)

  if (
    tags[0] === false &&
    tags[1] === false &&
    tags[2] === false &&
    tags[3] === false &&
    tags[4] === false &&
    tags[5] === false &&
    tags[6] === false
  ) {
    for (let i = 0; i < books.length; i += 1) {
      books[i].visable = true;
    }
  } else {
    for (let i = 0; i < books.length; i += 1) {
      books[i].visable = false;
    }
  }

  let counter = 0;
  tagName.forEach(tagN => {

    if (tags[counter] === true) {
      books.forEach((Element) => {
        Element.tags.forEach((tag) => {
          if (tag === tagN) {
            Element.visable = true;
          }
        });
      });
    }

    counter +=1;
  })

  books.forEach((Element) => {
    if (price[0] === true) {
      const x = Element.price.substring(1);
      if (x > 10) {
        Element.visable = false;
      }
    }
    if (price[1] === true) {
      const x = Element.price.substring(1);
      if (x < 10 || x > 20) {
        Element.visable = false;
      }
    }
    if (price[2] === true) {
      const x = Element.price.substring(1);
      if (x < 20) {
        Element.visable = false;
      }
    }
  });

  //getting all books with visable=true;

  visableBooks = [];

  for (let i = 0; i < books.length; i += 1) {
    if (books[i].visable === true) {
      visableBooks.push(i);
    }
  }

  //generate a books

  genBookshelf(books, visableBooks, authors);
}
