function countBs(sentence) {
    var count=0;
    for(i=0;i<sentence.length-1;i++) {
        if (sentence[i]=="B") {
            count+=1;
        }
    }
    return count;
}

function countChar(sentence, ch) {
    var count=0;
    for(i=0;i<sentence.length-1;i++) {
        if (sentence[i]==ch) {
            count+=1;
        }
    }
    return count;
}

console.log(countBs("Better be checking the Better Business Bureau"));

console.log(countChar("Better be checking the Better Business Bureau","r"));


