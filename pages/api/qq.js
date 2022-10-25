var fp = './QsAnswerArrays.json'

const fs = require('fs')
rawD = fs.readFileSync(fp)
jsonD = JSON.parse(rawD)

var keyRay = Object.keys(jsonD[1])// Currently: id, topic, question, answers
numberOfQuestions = jsonD.length

// Randomize answers
//TODO: something with correct answer (maybe "correct_answer" field like R originally had)
for(i = 0; i < numberOfQuestions; ++i){
    newRay = shuffle(jsonD[i][keyRay[3]])
    jsonD[i][keyRay[3]] = newRay
}//*/

console.log(jsonD)

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }