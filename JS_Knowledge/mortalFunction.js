const mortal = function (name) {
    if (name.toLowerCase() == 'socrates') {
        return true;
    } else {
        if (typeof (name) != 'string' || name.toLowerCase() != 'socrates') {
            return false;
        }
    }
}

console.log(mortal('socrates'));