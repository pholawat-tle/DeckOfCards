import Card, { Ranks, Suits } from "./Card.model";

export default class Deck {
	private cardArr: Card[];
	constructor(cArr?: Card[]) {
		if (cArr) {
			this.cardArr = cArr.slice();
		} else {
			this.cardArr = [];
			this.populateDeck();
		}
	}

	public getDeck() {
		return this.cardArr;
	}

	public sortDeck() {
		this.sort(this.compareFn);
	}

	public draw(): undefined | Card {
		return this.cardArr.pop();
	}

	public shuffle() {
		/* Randomize array in-place using Durstenfeld shuffle algorithm */
		for (var i = this.cardArr.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = this.cardArr[i];
			this.cardArr[i] = this.cardArr[j];
			this.cardArr[j] = temp;
		}
	}

	private compareFn(a: Card, b: Card): number {
		if (a.isLessThan(b)) return -1;
		if (a.isMoreThan(b)) return 1;
		return 0;
	}

	private sort(compareFn: (a: Card, b: Card) => number) {
		this.cardArr = this.cardArr.sort(compareFn);
	}

	private populateDeck() {
		for (let i in Suits) {
			if (typeof Suits[i] === "number") {
				for (let j in Ranks) {
					if (typeof Ranks[j] === "number") {
						const newCard = new Card(Number(Suits[i]), Number(Ranks[j]));
						this.insertCard(newCard);
					}
				}
			}
		}
	}

	private insertCard(c: Card) {
		this.cardArr.push(c);
	}
}
