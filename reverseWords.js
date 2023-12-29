// Complete the function that accepts a string parameter, and reverses each word in 
// the string. All spaces in the string should be retained.


// answer

function reverseWords(str) {
    let wordsArray = str.split(" ");
      let wordsMap = wordsArray.map(word => {
        if (word !== ''){
          return word.split('').reverse().join('')
        } else {
          return ''
        }
     
      })
      let newWord = wordsMap.join(' ');
        return newWord
    }