const reverseString = function(text = '') {
    letters = [];
    revText = '';
  
    for (letter of text){
      letters.push(letter);
    }
  
    while(letters.length>0){
      revText += letters.pop();
  
    }
  
    return revText;

};

// Do not edit below this line
module.exports = reverseString;
