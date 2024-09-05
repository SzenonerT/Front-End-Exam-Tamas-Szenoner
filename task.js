export function countDifferentLetters(sentence) {
    // make it case Sensitive the input:
    const sentenceWord = sentence.toLowerCase()

     // collect the Unique letters:
    const uniqueLetters = new Set();

    for( const letter of sentenceWord){
        if( letter >= 'a' && letter <= 'z'){

            uniqueLetters.add(letter)
        }

    }
    return uniqueLetters.size
}