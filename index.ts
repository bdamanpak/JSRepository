// import _ from 'lodash';

type PersonType = {
    ID?: number;
    firstName?: string;
    lastName?: string;
    age?: number;
    job?: string;
    maritalStatus?: boolean;
    gender?: "female" | "Female" | "male" | "Male";
    height?: number;
    weight?: number;
    telNumber?: string;
};

//  Adding function 
const addPerson = (user: PersonType): void => {
    persons.push(user);
};

//  Removing function 
const removePerson = (id: PersonType["ID"]): Array<PersonType> => {
    const temp = persons.findIndex((obj) => obj.ID === id);

    if (temp > -1)
        persons.splice(temp, 1);

    return persons;
}


//  Editing function
const updateUser = (id: PersonType["ID"], user: PersonType): void => {
    const temp = persons.findIndex((obj) => obj.ID === id);
    persons[temp] = { ...persons[temp], ...user };
}


const persons: Array<PersonType> = []

const bardia: PersonType = {
    ID: 1,
    firstName: "Bardia",
    lastName: "Damanpak",
    age: 26,
    job: "Jobless",
    maritalStatus: false,
    gender: "Male",
    height: 181,
    weight: 95,
    telNumber: "09173024786"
};

const salal: PersonType = {
    ID: 2,
    firstName: "Salal",
    lastName: "Damanpak",
    age: 24,
    job: "EE",
    maritalStatus: false,
    gender: "Female",
    height: 166,
    weight: 55,
    telNumber: "09173024786"
};

const bufel: PersonType = {
    ID: 3,
    firstName: "Buffle",
    lastName: "Damanpak",
    age: 3,
    job: "Cat",
    maritalStatus: false,
    gender: "Male",
    height: 50,
    weight: 5,
    telNumber: "09173024786"
};

addPerson(salal);
addPerson(bardia);      
addPerson(bufel);

// removePerson(1);

// updateUser(1, {age: 46});


function compareByID(a: PersonType, b: PersonType) {
    return (a.ID || 0) - (b.ID || 0);
}

// Sort the array using the comparison function
persons.sort(compareByID);

console.log(persons);