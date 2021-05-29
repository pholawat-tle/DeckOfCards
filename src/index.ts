import Card from "./models/Card.model";
import Deck from "./models/Deck.model";

const deck = new Deck();

deck.shuffle();

const player1 = deck.draw();
const player2 = deck.draw();

if (player1 instanceof Card && player2 instanceof Card) {
	console.log(`Player 1 has ${player1}`);
	console.log(`Player 2 has ${player2}`);

	if (player1.isMoreThan(player2)) {
		console.log(`Player 1 wins!`);
	} else {
		console.log(`Player 2 wins!`);
	}
}
