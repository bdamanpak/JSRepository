//  Main Array
const persons = []

//  Adding function 
function addPerson(name, age, major) {
    const person = {
        name,
        age,
        ID: Date.now(),
        major
    }
    persons.push(person);
};


//  Removing function 
function removePerson(name) {
    const temp = persons.findIndex((obj) => obj.name === name);

    if (temp > -1)
      persons.splice(temp, 1);

    return persons;
  }


//  Editing function
  function editPerson(){

    function editName(name, newInput) {
        for (let i = 0; i < persons.length; i++) {
            if (name === persons[i].name) {
                persons[i].name = newInput;
            }
        }
    }
    
    function editAge(name,age){
        for(let i = 0; i < persons.length; i++){
            if(name === persons[i].name){
                persons[i].age = age;
            }
        }
    }
    
    function editMajor(name,major){
        for(let i = 0; i < persons.length; i++){
            if(name === persons[i].name){
                persons[i].major = major;
            }
        }
    }
    const field = prompt("which one you want to edit? +name+ +age+ +major+");
    switch (field) {
        case "name":
            const name = prompt("Enter the name you want to change: ");
            const newInput = prompt("Enter the new name: ");
            editName(name, newInput);
            break;
        case "age":
            const person = prompt("whose age you want to edit? ");
            const age = +prompt("enter the new age: ");
            editAge(person, age);
            break;
        case "major":
            const temp = prompt("whose major you want to edit? ");
            const major = prompt("enter the new major: ");
            editMajor(temp, major);
            break;
        default:
            console.log("ERROR!!!!");
    }
    
}


//  Testing the functions 
addPerson("bardia", 27, "CE");
addPerson("bufel", 3, "EE");
addPerson("salal", 25, "ART");

removePerson("bardia");

editPerson();


console.log(persons);


