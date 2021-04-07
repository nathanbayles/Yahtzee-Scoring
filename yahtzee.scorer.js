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

// [3,3,3,1,1] => 11
// [1,3,3,3,1] => 11
// [1,3,1,3,3] => 11
// [2,5,3,5,5] => 20
// [2,5,5,5,5] => 22
// [3,3,4,1,1] => 0
function scoreThreeOfAKind(fiveDiceRoll)
{
  const counts = {};
  fiveDiceRoll.forEach((roll) => {
    if (roll in counts) {
      let currentCount = counts[roll];
      currentCount += 1;
      counts[roll] = currentCount;
    } else {
      counts[roll] = 1;
    }
  })

  let sum = 0;
  for (const [key, value] of Object.entries(counts)) {
    // {2: 1, 5: 4} = >
    // {3: 2, 4: 1, 1: 2} => 
    let hasThreeOfKind = false;
    if (value >= 3) {
      hasThreeOfKind = true;
      sum += key * value;
    } else {
      sum += key;
    }
  }

  return (hasThreeOfKind) ? sum : 0;
}


function scoreChance(fiveDiceRoll)
{
  let chanceScore = 0;
  for(var i = 0 ; i < fiveDiceRoll.length ; i++)
  {
    
  }
  return chanceScore;
}
module.exports = score;