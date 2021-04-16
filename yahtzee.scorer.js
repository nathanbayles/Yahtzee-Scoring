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
    return fiveDiceRoll.reduce((prev, cur) => cur + prev);
}

// if the fiveDiceRoll[] contains three (or more) of a kind, return sum of all dice in fiveDiceRoll[]
// else return 0
// [1,2,3,2,2] = 10
// [1,2,3,4,5] = 0
function scoreThreeOfAKind(fiveDiceRoll)
{
    let counter = [0,0,0,0,0,0,0];
    var maxCount = 0;
    for(let i = 0; i < fiveDiceRoll.length; i++) 
    {
        counter[0] += fiveDiceRoll[i];
        counter[fiveDiceRoll[i]] += 1;
        if (counter[fiveDiceRoll[i]] > maxCount)
        {
            maxCount = counter[fiveDiceRoll[i]];
        }        
    }
    return maxCount >= 3 ? counter[0] : 0;
}

module.exports = score;
