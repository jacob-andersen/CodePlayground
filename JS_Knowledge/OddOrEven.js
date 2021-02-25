// Recursive implementation of a function that determines whether a number is ODD or EVEN.

function isEven(n) {
    if (n==0) {
        return true;
    } else if (n==1||n<0) {
        return false;
    } 
        return isEven(n-2);
}

console.log(isEven(-22));