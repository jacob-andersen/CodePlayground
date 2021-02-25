import java.util.Stack;

public class DeckTest {
    public static void main(String[] args) {
        
        Stack<Card> deck = Deck.makeDeck();
        int count = 1;

        while(!deck.isEmpty()) {
            Card newcard = deck.pop();

            System.out.println(count++ + " : " + (newcard.getCardValue(newcard)));
        }
    }
    
}
