let words = ["never","fully"];
console.log(["will", ...words, "understand"]);
let animal = {
    squirrel: false,
    events: ["weekend"]
};

const {squirrel: dyr, events: begivenheder} = animal;

console.log (`${dyr} ${begivenheder}`);