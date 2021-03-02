// A classic coding challenge
// If a number in a range divides into 3 OR 5 OR BOTH
// the number is replaced by either Fizz, Buzz or FizzBuzz
// otherwise, the number is printed

for (i=1;i<=100;i++)
{
    if (i%3==0&&i%5!=0) {
        console.log("Fizz");
    } else if (i%5==0&&i%3!=0) {
        console.log("Buzz");
    } else if (i%15==0) {
        console.log("FizzBuzz");
    }
    else console.log(i);
}