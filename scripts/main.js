/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

// establish my hand as an array
var myHand = ['7', 'A', 'A', 'A'];

function handValue (hand) {
  var hasAce = 0;

  // convert card array's strings to integers, except Aces
  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === 'K' || hand[i] === 'Q' || hand[i] === 'J') {
      hand[i] = 10;
    } else if (hand[i] === 'A') {
      hasAce += 1;
      hand[i] = 0;
    } else {
      hand[i] = parseInt(hand[i]);
    }
  }

  // add hand array together into one integer
  hand = hand.reduce((a, b) => a + b, 0);

  // now, deal with Aces being either 1 or 11 now that we know the hand total
  while (hasAce >= 1) {
    if (hand <= 10) {
      hand = hand + 11;
      hasAce--;
    } else {
      hand = hand + 1;
      hasAce--;
    }
  }
  return hand;
}

handValue(myHand);

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
