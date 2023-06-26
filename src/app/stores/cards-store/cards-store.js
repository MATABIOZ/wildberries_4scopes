export class CardsStore {
    static cards = [];

    static getCards() {
        return this.cards;
    }

    static setCards(value) {
        this.cards = value;
    }

    static getSelectedCard(id) {
        return this.cards.find((card) => card.id === id);
    }
}
