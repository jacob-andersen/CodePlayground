const timeAdder = function (value1, label1, value2, label2) {
    
    // check that parameters are of a valid TYPE before continuing
    
    if (typeof (value1) != 'number' || typeof (value2) != 'number' || typeof (label1) != 'string' || typeof (label2) != 'string') {
        return false;
    }

    // Evaluate whether the two time values are valid or invalid
    // If either one is invalid, the value3 will be assigned FALSE
    // If both are valid inputs, they will be added together and returned as a new array.
    // The sum of the time values determines if the label returned is plural or singular

    let value3 = (evaluateInput(value1, label1) == false || evaluateInput(value2, label2) == false) ? false : evaluateInput(value1, label1) + evaluateInput(value2, label2)
    let label3 = (value3 > 1) ? "minutes" : "minute"

    if (value3 != false) {
        return [value3, label3]
    }
    return false;
}

// The helper function evaluteInput will determine if a time value is possible

const evaluateInput = function (a, b) {

    switch (b) {
        case "day": {
            if (a > 1) {
                return false
            } else {
                return a
            }
        }
        case "days": {
            if (a < 2) {
                return false
            } else {
                return a
            }
        }
        case "hour": {
            if (a > 1) {
                return false
            } else {
                return a
            }
        }
        case "hours": {
            if (a < 2) {
                return false
            } else {
                return a
            }
        }
        case "minute": {
            if (a > 1) {
                return false
            } else {
                return a
            }
        }
        case "minutes": {
            if (a < 2) {
                return false
            } else {
                return a
            }
        }
        case "second": {
            if (a > 1) {
                return false
            } else {
                return a
            }
        }
        case "seconds": {
            if (a < 2) {
                return false
            } else {
                return a
            }
        }
    }
}


// Examples of possible inputs

console.log(timeAdder(1, "minute", 3, "minutes"))

console.log(timeAdder(5, "days", 25, "hours"))

console.log(timeAdder(1, "minute", 240, "seconds"))

// Examples of impossible inputs

console.log(timeAdder(5, "hour", 5, "minutes"))

console.log(timeAdder(false, false, 5, "minutes"))

console.log(timeAdder({}, "days", 5, "minutes"))