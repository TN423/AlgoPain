/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

//input is the choic R,P, or S for 3 times


var rockPaperPermutation2 = function (roundcount) {

  var results = []
  var rounds = function (plays) {
    if (plays.length=roundcount) {
      results.push(plays)
      return
    }
    var choices = ['r','p','s']
    for (var i=0; i<choices.length;i++) {
      plays+=choices[i]
      rounds(plays)
    }
    rounds("")
    //stop case = when result length = rounds
      //push result into results array
    //recursive case
      //start a round, and loop through all possibilities
      //add the current rond into result

  }
  return results
}







const rockPaperPermutation = (roundCount) => {
  if (roundCount === 0) return []
  const permutations = []
  function playRound(plays) {
    if (plays.length === roundCount) {
      permutations.push(plays)
      return
    }
    var choices = ['r','p','s']
    for (var i =0; i < choices.length; i++) {
      playRound(plays+choices[i])
    }
  }
  playRound('')
  return permutations
}

var answer = rockPaperPermutation2(3)
console.log(answer)



