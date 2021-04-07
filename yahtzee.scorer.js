function score(fiveDiceRoll, scoringRule) {
  switch(scoringRule)
  {
    case "chance":
     return scoreChance(fiveDiceRoll);
    case "three-of-a-kind":
     return scoreThreeOfAKind(fiveDiceRoll);
    default:
     return 0;
  }
}

// return the sum of all dice in fiveDiceRoll[]
// [1,1,1,1,1] = 5
function scoreChance(fiveDiceRoll)
{
}

// if the fiveDiceRoll[] contains three (or more) of a kind, return sum of all dice in fiveDiceRoll[]
// else return 0
// [1,2,3,2,2] = 10
// [1,2,3,4,5] = 0
function scoreThreeOfAKind(fiveDiceRoll)
{
}

module.exports = score;