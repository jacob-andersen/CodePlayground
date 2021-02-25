/* 
this file is an exercise in dataypes, it shows information about 
a music album where the different properties are represented 
by various data types
*/

// details about the band and album

var album = "Running In The Family";
var songs = ["Lessons in Love","Children Say","Running in the Family","It's over","To Be with You Again","Two Solitudes","Fashion Fever","The Sleepwalkers","Freedom Someday"];
var band = "Level 42";
var musicians = {
    bass: "Mark King",
    guitar: "Boon Gould",
    keyboards: "Mike Lindup",
    drums: "Phil Gould",
}
var genre = "Funk";
var yearReleased = 1987;
var lengthInSeconds = 2564;
var CD = true;
var cassette = true;
var LP =  true;

// Information about the album

console.log("Album : " + album);
console.log("Band : " + band);
console.log("Genre : " + genre)
console.log("Year released : " + yearReleased)
console.log("Playtime in seconds (LP) : " + lengthInSeconds)

// list of songs on the album

console.log("\nTracklisting : \n");
console.log(songs[0])
console.log(songs[1])
console.log(songs[2])
console.log(songs[3])
console.log(songs[4])
console.log(songs[5])
console.log(songs[6])
console.log(songs[7])
console.log(songs[8])

// list of Musicians on the Album

console.log("\nMusicians : \n");
console.log("Bass / Vocals : " + musicians.bass)
console.log("Guitar : " + musicians.guitar)
console.log("Keyboards / Vocals : " + musicians.keyboards)
console.log("Drums : " + musicians.drums)

// information about the albums availability

console.log("\nAvailable on CD : " + CD)
console.log("Available on Cassette Tape : " + cassette)
console.log("Available on LP : " + LP)


