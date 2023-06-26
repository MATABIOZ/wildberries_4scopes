import { CardsStore } from "../../stores/cards-store/cards-store.js";

export function getDataCards() {
    return fetch("https://646f451109ff19b12086e48a.mockapi.io/wildberries/cards")
        .then((response) => response.json())
        .then((cards) => {
            CardsStore.setCards(cards);
            return cards;
        })
        .catch((error) => {
            throw error;
        });
}
