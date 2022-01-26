function alertWord() {
    alert("Hello World!!");

    var firstName = 'David';
    console.log(firstName)

    const states = 50;
    console.log(states);
    // number of states

    var a = 5 + 4;
    //variable a that has the result of 5+4
    
    console.log(a);
}
alertWord();



function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
}
checkAge("charles", 21);
checkAge("abby", 27);
checkAge("james", 18);
checkAge("john", 17);

var vegetables = ["broccoli", "carrot", "squash", "potato"];

for (var i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i])
}

const pet =
{
    name: "sam",
    breed: "husky/corgi",
}

pet.name;
pet.breed;

console.log(pet.name.breed);

var friends = [
    {
        name: "jon",
        age: 4,
    },
    {
        name: "devan",
        age: 4,
    },
    {
        name: "daniel",
        age: 28,
    },
    {
        name: "james",
        age: 54,
    },
    {
        name: "nick",
        age: 22,
    }
];

for(var i = 0; i < friends.length; i++){
    const friend = friends[i];
    checkAge (friend.name, friend.age)
}

function getLength(word) {
    return word.length
}

const length = getLength('hello world!!')
alert(length)

function isEven(n) {
    if (n % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};

if (isEven(length)){
    console.log("the world is nice and even!")
}
else {
    console.log('the world is an odd place!')
}