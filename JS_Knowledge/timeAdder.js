const timeAdder = function(value1, label1, value2, label2) {
    let value3 = 0;
    let label3 = "";
    // check that parameters are a valid type before going into the switch statement
    if(typeof(value1) != 'number' || typeof(value2) != 'number' || typeof(label1) != 'string' || typeof(label2) != 'string')
    {
        return false;
    }
    switch(value1) {

    }
}

console.log(timeAdder(0, false, 0, "minutes"))