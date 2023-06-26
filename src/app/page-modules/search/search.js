import { getDataCards } from "../../core/API/cardsApi.js";
import { addCards } from "../product-card/product-card.js";

const searchWrapper = document.querySelector(".search");
const inputBox = document.querySelector(".search__input");
const searchBtn = document.querySelector(".search-btn");
const cardsInner = document.querySelector(".cards__inner");
let dataCards;
let titleData = [];
let brandData = [];

inputBox.addEventListener("input", onEnter);

function checkSearchListItems() {
    let searchList = document.querySelector(".search__list");

    if (searchList) {
        document.addEventListener("click", removeSearchList);
    }
}

function removeSearchList(event) {
    if (event.target !== inputBox) {
        let searchList = document.querySelector(".search__list");
        if (searchList) {
            searchList.remove();
        }
        document.removeEventListener("click", removeSearchList);
    }
}

async function getCardsForSerch() {
    dataCards = await getDataCards();

    addCards(dataCards);

    dataCards.forEach((element) => {
        if (!titleData.includes(element.title)) {
            titleData.push(element.title);
        }

        if (!brandData.includes(element.brand)) {
            brandData.push(element.brand);
        }
    });
}

function onEnter(event) {
    let inputValue = event.target.value;
    let titleDataArray = titleData.filter((data) => {
        return data.toLowerCase().startsWith(inputValue.toLowerCase());
    });

    let brandDataArray = brandData.filter((data) => {
        return data.toLowerCase().startsWith(inputValue.toLowerCase());
    });

    let searchList = document.querySelector(".search__list");

    if (!inputValue) {
        if (searchList) {
            searchList.remove();
            checkSearchListItems();
        }
        return;
    }

    if (!searchList) {
        searchList = document.createElement("ul");
        searchList.classList.add("search__list");
        searchWrapper.appendChild(searchList);
        checkSearchListItems();
    } else {
        searchList.innerHTML = null;
    }

    onCklickEventEnter(inputValue);
    searchBtn.addEventListener("click", () => onSearchElements(inputValue));
    createElemnetsSearchList(titleDataArray, searchList);
    createElemnetsSearchList(brandDataArray, searchList);
}

function selectCardsProduct() {
    const searchListItems = document.querySelectorAll(".search__list-item");
    searchListItems.forEach((item) => {
        item.addEventListener("click", function (event) {
            cardsInner.innerHTML = null;
            const category = event.target.textContent;
            let filterSearchCards = [];

            dataCards.forEach((element) => {
                if (element.title.toLowerCase() === category.toLowerCase()) {
                    filterSearchCards.push(element);
                }

                if (element.brand.toLowerCase() === category.toLowerCase()) {
                    filterSearchCards.push(element);
                }
            });

            addCards(filterSearchCards);
        });
    });
}

function onCklickEventEnter(value) {
    inputBox.addEventListener("keyup", (event) => {
        if (event.code === "Enter") {
            onSearchElements(value);
            removeSearchList({ target: document });
        }
    });
}

function onSearchElements(value) {
    cardsInner.innerHTML = null;
    let filterSearchCards = [];
    dataCards.forEach((element) => {
        if (element.title.toLowerCase().startsWith(value.toLowerCase())) {
            filterSearchCards.push(element);
        }
    });
    addCards(filterSearchCards);
}

function createElemnetsSearchList(suggestions, searchList) {
    suggestions.forEach((text) => {
        const searchListItem = document.createElement("li");
        searchListItem.classList.add("search__list-item");
        searchListItem.textContent = text;
        searchList.appendChild(searchListItem);
        selectCardsProduct();
    });
}

window.addEventListener("DOMContentLoaded", getCardsForSerch);
