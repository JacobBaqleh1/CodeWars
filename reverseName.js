// Write a function that returns a string in which firstname is swapped with last name.

// answer

function nameShuffler(str){
    //Shuffle It
    let strArr = str.split(' ');
    return strArr.reverse().join(' ')
    
  }
