import showAuthor from './showAuthor.js';

export default function genBookshelf(books,visableBooks,authors) {

  //generate a books

  let bs = document.getElementById("bookshelf"); //get div with books
  let i = 0;
  bs.innerHTML = ""; //clear div with books

  //display chosen books

  visableBooks.forEach((book) => {
    bs.innerHTML += `
      <div class="book">
        <div id="bT${i}" class="bTags"></div>
        <div class="bPrice">${books[book].price}</div>
        <div id = "author${i}" class="bAuthor"><i class="fas fa-info-circle"></i>
        ${books[book].sName}</div>
        <div class="bTitle">${books[book].title}</div>
        <div class="bDescription">${books[book].description}</div>
      <div>
      `;
    books[book].tags.forEach((Element) => {
      document.getElementById(`bT${i}`).innerHTML += `
        <div class="tag">${Element}</div>
        `;
    });
    i += 1;
  });

  //set onclicks for authors bio

  for (let i = 0; i < visableBooks.length; i += 1)
    document.getElementById(`author${i}`).onclick = function () {
      showAuthor(visableBooks[books[i].num],authors);
    };
}
