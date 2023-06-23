import { addCards } from "../product-card/product-card.js";
import { getDataCards } from "../../core/API/cardsApi.js";
import { checkSidebarClass } from "../burger/burger.js";
import { setBodyStyles } from "../burger/burger.js";

const sidebarList = document.querySelector('.sidebar__list')
const sidebar = document.querySelector('.sidebar')
const cardsInner = document.querySelector('.cards__inner')
let dataCardsFromApi

sidebarList.addEventListener('click', onSidebarItem)

const productMenu = {
    'Футболки': 'майка',
    'Обувь': 'кроссовки',
    'Брюки': 'штаны',
    'Байки': 'байка',
    'Верхняя одежда': 'куртка'
}

function onSidebarItem(event) {
    const textContent = event.target.textContent

    if (productMenu.hasOwnProperty(textContent)) {
        filterCards(productMenu[textContent]) 
    } 
}

async function filterCards(text) {
    dataCardsFromApi = await getDataCards()
    cardsInner.innerHTML = null
    let cards= []

    dataCardsFromApi.forEach(element => {
    
        if(element.title.toLowerCase().startsWith(text)) {
            cards.push(element)
        }
     })

     addCards(cards)
     sidebar.classList.remove('sidebar_active')
     checkSidebarClass()
     setBodyStyles(null, null, null)
}