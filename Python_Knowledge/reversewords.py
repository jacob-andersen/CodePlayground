word = 'The Cat In The Hat'
reverseWord=""

for x in word.split():
    reverseWord+=x[::-1]+" "

print(reverseWord.rstrip())