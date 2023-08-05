//  Words collection to use 

const word = [
    'Got',
    'ability',
    'shop',
    'recall',
    'fruit',
    'easy',
    'dirty',
    'giant',
    'shaking',
    'ground',
    'weather',
    'lesson',
    'almost',
    'square',
    'forward',
    'bend',
    'cold',
    'broken',
    'distant',
    'adjective.'
]

//  Functions to use for getting random dates and random number which it uses in random word


function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function getRandomDate() {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp);
}


// Main function to get the random stuffs 

function objectCreator(list, iterationNO) {

    for(let i = 0; i < iterationNO; i++){

    const obj = {
        randomNumber: Date.now(),
        randomDate: getRandomDate(),
        randomWord: word[randomNumber(0, word.length - 1)]
    }

    list.push(obj);
    }

}

//  List to save the objects

objectList = []


// Run the function 

const input = +prompt("How many objects you want to create randomly? ");
objectCreator(objectList, input);
console.log(objectList);





