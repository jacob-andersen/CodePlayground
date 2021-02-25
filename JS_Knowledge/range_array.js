const range = function (start, end, step=1) {
    let array = [];
    let elem = start;
    for (i = start; i <= (end-start+1)/step; i++) {
        array[i-1] = elem;
        elem+=step;
    }
    return array;
};

const sum = function (numbers) {
    let sum=0;
    for (i=0;i<numbers.length;i++) {
        sum += numbers[i];
    }
    return sum;
};

console.log(sum(range(1, 10)));
