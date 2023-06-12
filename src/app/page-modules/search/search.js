import { alyaStore, getCards, getDataCards } from "../../core/API/cardsApi";
import { addCards } from "../product-card/product-card";

const searchWrapper = document.querySelector(".search");
const inputBox = document.querySelector(".search__input");
const searchBtn = document.querySelector('.search-btn')
const cardsInner = document.querySelector('.cards__inner')
let dataCards
let titleData = []



async function getCardsForSerch() {
   dataCards = await getDataCards()

   dataCards.forEach(element => {
      if (!titleData.includes(element.title)) {
         titleData.push(element.title)
      }
   })
}


inputBox.addEventListener('input', onEnter)

function onEnter(event) {
   let inputValue = event.target.value
   let sameArray = titleData.filter(data => {
      return data.toLowerCase().startsWith(inputValue.toLowerCase())
   })
   let searchList = document.querySelector('.search__list')

   if (!inputValue) {
      if (searchList) {
         searchList.remove()
      }
      return
   }

   if (!searchList) {
      searchList = document.createElement('ul')
      searchList.classList.add('search__list')
      searchWrapper.appendChild(searchList)
   } else {
      searchList.innerHTML = ""
   }



   searchBtn.addEventListener('click', onSearchElements)
   inputBox.addEventListener('keyup', event => {
      if (event.code === 'Enter') {
         onSearchElements()
      }
   })
   function onSearchElements() {
      cardsInner.innerHTML = null
      let filterSearchCards = []
      dataCards.forEach(element => {
         if (element.title.toLowerCase().startsWith(inputValue.toLowerCase())) {
            filterSearchCards.push(element)
         }
      })
      addCards(filterSearchCards)
   }




   createSearchList(sameArray, searchList)
}



function createSearchList(suggestions, searchList) {
   suggestions.forEach(text => {
      const searchListItem = document.createElement('li')
      searchListItem.classList.add('search__list-item')
      searchListItem.textContent = text
      searchList.appendChild(searchListItem)
      selectCardsProduct()
   })
}

function selectCardsProduct() {
   const searchListItems = document.querySelectorAll('.search__list-item')
   searchListItems.forEach(item => {
      item.addEventListener('click', function (event) {
         cardsInner.innerHTML = null
         const category = event.target.textContent
         let filterSearchCards = []
         dataCards.forEach(element => {
            if (element.title.toLowerCase() === category.toLowerCase()) {
               filterSearchCards.push(element)
            }
         })
         addCards(filterSearchCards)
      })
   })
}

window.addEventListener('DOMContentLoaded', getCardsForSerch())