import java.util.Stack;
import java.util.Collections;

public class Deck {

    public Deck() {}

    public static Stack<Card> makeDeck() {
        Stack<Card> deck = new Stack<Card>();
        for (Card.Suit suit : Card.Suit.values()) {
            for (Card.Rank rank : Card.Rank.values()) {
                deck.push(new Card(suit, rank));
            }
        }

        for (int i = 0; i < 15; i++) {
            Collections.shuffle(deck);
        }
        return deck;
    }
}