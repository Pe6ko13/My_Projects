import { townsList } from "./townsList.js";

// required elements

const searchCont = document.querySelector(".search-bar");
const inputBox = searchCont.querySelector(".search-bar__input");
const dropdown = searchCont.querySelector(".search-bar__dropdown");

inputBox.onkeyup = (ev) => {
  let inputData = ev.target.value; //entered data
  let result = [];

  if (inputData) {
    let towns = townsList.map((data) => data.name + ", " + data.region);

    result = towns.filter((data) => {
      return data.toLocaleLowerCase().startsWith(inputData.toLocaleLowerCase());
    });

    result = result.map((data) => {
      return (data = "<li>" + data + "</li>");
    });

    searchCont.classList.add("active"); //show autocomplate box
    showSuggestions(result);

    let allList = dropdown.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      //adding on click attribute in all li tag
      allList[i].setAttribute("onclick", "select(this)");
      allList[i].onclick = function () {
        select(allList[i]);
      };
    }
  } else {
    searchCont.classList.remove("active"); //hide autocomplate box
  }
  //   Simple variant without the function 'showSuggestions()'
  //   dropdown.innerHTML = result.join("");
};

function select(e) {
  let selectedData = e.textContent;
  inputBox.value = selectedData; // passing the selected option in the text field
  searchCont.classList.remove("active"); //hide autocomplate box
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    let userValue = inputBox.value;
    listData = "<li>" + userValue + "</li>";
  } else {
    listData = list.join("");
  }

  dropdown.innerHTML = listData;
}

document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clik");
  let query = inputBox.value;
  window.location.href = `https://www.google.com/maps/place/${query}`;
});

inputBox.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    let query = e.target.value;
    window.location.href = `https://www.google.com/maps/place/${query}`;
  }
});
