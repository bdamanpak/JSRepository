// A function to get the tempreture in Celsius and convert it to Fahrenheit 

function convertToFahrenheit(celsius) {

    if (isNaN(celsius))
        return console.log("INVALID INPUT !");
    else
        return console.log("The entered tempreture in the Fahrenheit is : " + ((celsius * 9 / 5) + 32));

}

let input = +prompt("Enter the Celsius tempreture as the input : ");
convertToFahrenheit(input);

// --------------------------------------------------------------------------------------------------------------------- //

// A function which takes 2 parameters and check the availability of the second one in the first one

function checkAvailability(sentence, word) {

    if (isNaN(sentence) && isNaN(word)) {
        if (sentence.includes(word))
            return console.log("The sentence includes the given word !");
        else
            return console.log("The sentence does not include the given word !");
    }
    else
        return console.log("INVALID INPUT !");
}

const sentence = prompt("Enter the sentence that you want : ");
const word = prompt("Enter the word that you want to check its availability: ");
checkAvailability(sentence, word);

// --------------------------------------------------------------------------------------------------------------------- //


// Create an object which it is about the Product and it has some features + some functions 

const product = {
    name: "iPhone 14 Promax",
    brand: "Apple",
    storage: "256GB",
    OS: "iOS",
    color: "Space Black",
    chip: "A16 Bionic Chip",
    addToCart: function () {

    },

    removeFromCart: function () {

    }
}
