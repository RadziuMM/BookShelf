const axios = require("axios");

let books = [];
let authors = [];

export default function loadData(fetchB) {
  
  //fetch data from api

  axios
    .get("http://localhost:3000/books")
    .then((res) => {
      books = res.data.books;
      for (let i = 0; i < books.length; i += 1) {
        books[i].visable = true;
      }
    })
    .then(() => {
      axios
        .get("http://localhost:3000/authors")
        .then((res) => {
          authors = res.data.authors;
          books.forEach((Element) => {
            let x = Element.authorId.substring(1);
            x = x - 1;
            const name = `${authors[x].name[0]}.${authors[x].surname}`;
            Element.sName = name;
            Element.num = x;
          });
        })
        .then(() => {
          //callback
          fetchB(books, authors);
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.error(error);
    });
}
