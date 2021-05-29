export enum Suits {
	Clubs,
	Diamonds,
	Hearts,
	Spades,
}

export enum Ranks {
	Ace,
	Two,
	Three,
	Four,
	Five,
	Six,
	Seven,
	Eight,
	Nine,
	Ten,
	Jack,
	Queen,
	King,
}

export default class Card {
	public Suit: Suits;
	public Rank: Ranks;

	constructor(s: Suits, r: Ranks) {
		this.Suit = s;
		this.Rank = r;
	}

	public isLessThan(CardB: Card): boolean {
		if (CardB.Rank === this.Rank) {
			if (CardB.Suit > this.Suit) {
				return true;
			} else {
				return false;
			}
		} else {
			if (CardB.Rank > this.Rank) {
				return true;
			} else {
				return false;
			}
		}
	}

	public isMoreThan(CardB: Card) {
		if (CardB.Rank === this.Rank) {
			if (CardB.Suit < this.Suit) {
				return true;
			} else {
				return false;
			}
		} else {
			if (CardB.Rank < this.Rank) {
				return true;
			} else {
				return false;
			}
		}
	}

	public toString(): string {
		let beginWithVowels = new RegExp("^(a|e|i|o|u|A|E|I|O|U)");
		if (beginWithVowels.test(Ranks[this.Rank])) {
			return `an ${Ranks[this.Rank]} of ${Suits[this.Suit]}`;
		}

		return `a ${Ranks[this.Rank]} of ${Suits[this.Suit]}`;
	}
}
