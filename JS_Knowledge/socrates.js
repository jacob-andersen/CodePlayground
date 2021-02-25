let men = true;
let allMen = men;
let mortal = allMen;
let socrates = men;
socratesIsMortal = false;

// man is part of allMen?
if (men == allMen) {
    // If Yes, are all men mortal?
    if (allMen == mortal) {
        // If Yes, is Socrates a man?
        if (socrates == men) {
            // if Yes, Socrates belongs to the group of men who is part of all men, who are immortal.
            socratesIsMortal = true;
        }
    }
}

function sayHi(userName="Peter") {
    console.log("Hi" + "  "+ userName)
}

sayHi("Jacob");
console.log(socratesIsMortal)