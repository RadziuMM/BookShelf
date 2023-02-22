import loadData from "./loadData.js";
import filter from "./filter.js";

const tags = [false, false, false, false, false, false, false];
let books = [];
let authors = [];
let price = [false, false, false];

//generate a html structure

const genHTML = () => {
  const app = document.getElementById("app");
  app.innerHTML = `
  <div id="space">x</div>
  <div id="topPanel0" class="topPanel">
    <h1>Super Title</h1>
    <div class="box">
      <div>
        <div id="button0" class="label">
          Tags<span id="button00"><i class="fas fa-chevron-up"></i></span>
        </div>
        <hr />
        <div class="checkbox" id="checkbox--0">
          
          <label for="tags__checkbox--0">
            <input type="checkbox" id="tags__checkbox--0" />
            <span class="checkbox-custom"></span>
            javascript 
          </label>
          <label for="tags__checkbox--1"> 
            <input type="checkbox" id="tags__checkbox--1" />
            <span class="checkbox-custom"></span>
            fundamentals 
          </label>
          <label for="tags__checkbox--2"> 
            <input type="checkbox" id="tags__checkbox--2" />
            <span class="checkbox-custom"></span>
            advanced 
          </label>
          <label for="tags__checkbox--3">
            <input type="checkbox" id="tags__checkbox--3" />
            <span class="checkbox-custom"></span>
            css 
          </label>
          <label for="tags__checkbox--4">
            <input type="checkbox" id="tags__checkbox--4" />
            <span class="checkbox-custom"></span>
            accessibility 
          </label>
          <label for="tags__checkbox--5">
            <input type="checkbox" id="tags__checkbox--5" />
            <span class="checkbox-custom"></span>
            svg 
          </label>
          <label for="tags__checkbox--6">
            <input type="checkbox" id="tags__checkbox--6" />
            <span class="checkbox-custom"></span>
            architecture 
          </label>
        </div>
      </div>
      <div>
        <div id="button1" class="label">
          Price <span id="button10"><i class="fas fa-chevron-up"></i></span>
        </div>
        <hr />
        <div class="checkbox" id="checkbox--1">
          <label for="price__checkbox--0">
            <input type="checkbox" id="price__checkbox--0" />
            <span class="checkbox-custom"></span>
            &lt; $10 
          </label>
          <label for="price__checkbox--1"> 
            <input type="checkbox" id="price__checkbox--1" />
            <span class="checkbox-custom"></span>
            $10-$20 
          </label>
          <label for="price__checkbox--2">
            <input type="checkbox" id="price__checkbox--2" />
            <span class="checkbox-custom"></span>
            &gt; $20 
          </label>
        </div>
      </div>
    </div>
  </div>
  <div id="bookshelf"></div>
  <div id="bioOverlay"></div>
  <div id="bio"></div> 
  `;
};

genHTML();

//set distance to topPanel
const setDistance = () => {
  const height0 = document.getElementById("topPanel0").style.height;
  document.getElementById("space").style.height = `${
    document.getElementById("topPanel0").clientHeight
  }px`;
};

setDistance();

//callback function for loadData()

const fetch = (x, y) => {
  books = x;
  authors = y;
  filter(tags, price, books, authors);
};

//load authors and books

loadData(fetch);

// Hide/Show filter function

const isHiden = [true, true];
const hide = (arg) => {
  if (arg === 0) {
    if (isHiden[0]) {
      document.getElementById("button00").style.transform = "scaleY(-1)";
      document.getElementById("checkbox--0").style.display = "block";
      isHiden[0] = false;
    } else {
      document.getElementById("button00").style.transform = "scaleY(1)";
      document.getElementById("checkbox--0").style.display = "none";
      isHiden[0] = true;
    }
  } else {
    if (isHiden[1]) {
      document.getElementById("button10").style.transform = "scaleY(-1)";
      document.getElementById("checkbox--1").style.display = "block";
      isHiden[1] = false;
    } else {
      document.getElementById("button10").style.transform = "scaleY(1)";
      document.getElementById("checkbox--1").style.display = "none";
      isHiden[1] = true;
    }
  }
  setDistance();
};

//set onclicks for filter buttons

document.getElementById("button0").onclick = function () {
  hide(0);
};
document.getElementById("button1").onclick = function () {
  hide(1);
};

// change filter settings

const changeTags = (arg0, arg1) => {
  tags[arg1] = arg0;
  filter(tags, price, books, authors);
};

const changePrice = (arg0) => {
  const arg1 = document.getElementById(`price__checkbox--${arg0}`).checked;
  document.getElementById(`price__checkbox--0`).checked = false;
  document.getElementById(`price__checkbox--1`).checked = false;
  document.getElementById(`price__checkbox--2`).checked = false;
  price = [false, false, false];
  price[arg0] = arg1;
  document.getElementById(`price__checkbox--${arg0}`).checked = price[arg0];
  filter(tags, price, books, authors);
};

//set onclicks for checkboxs

for (let i = 0; i < 7; i += 1) {
  document.getElementById(`tags__checkbox--${i}`).onclick = function () {
    changeTags(this.checked, i);
  };
}

for (let i = 0; i < 3; i += 1) {
  document.getElementById(`price__checkbox--${i}`).onclick = function () {
    changePrice(i, this.checked);
  };
}
