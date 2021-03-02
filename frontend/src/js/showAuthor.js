let authorNote = false;

export default function showAuthor(i,authors) {

  //set author bio note
  const bio = document.getElementById("bio");
  const bioOverlay = document.getElementById("bioOverlay");
  bio.innerHTML = `
  <a href="${authors[i].twitterUrl}" target="_blank"><div>
  <i class="fab fa-twitter"></i>
  ${authors[i].name} ${authors[i].surname}
  </div></a>
  <div id="close">close <i class="fas fa-times"></i></div>
  <div class="about">${authors[i].bio} </div>
  `;

  //open/close author bio note

  document.getElementById(`close`).onclick = function () {
    showAuthor(0,authors);
  };
  bioOverlay.onclick = function () {
    showAuthor(0,authors);
  };
  if (authorNote) {
    bio.style.display = "block";
    bioOverlay.style.display = "block";
    authorNote = false;
  } else {
    bio.style.display = "none";
    bioOverlay.style.display = "none";
    authorNote = true;
  }
}
