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

	public toString() {
		let beginWithVowels = new RegExp("^(a|e|i|o|u|A|E|I|O|U)");
		if (beginWithVowels.test(Ranks[this.Rank])) {
			return `This is an ${Ranks[this.Rank]} of ${Suits[this.Suit]}`;
		}

		return `This is a ${Ranks[this.Rank]} of ${Suits[this.Suit]}`;
	}
}
