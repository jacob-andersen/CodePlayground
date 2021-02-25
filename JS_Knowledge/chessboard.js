var chess_string = "";
for (i=0;i<8;i++) 
{
if (i%2==0) {
    chess_string+=" # # # # \n";
} else {
    chess_string+="# # # # \n";
}
}
console.log(chess_string);