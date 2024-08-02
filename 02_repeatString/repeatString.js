const repeatString = function(text = '', count=0) {
    
    if(count===-1) return 'ERROR';

    
    let newtext = '';
    let i = 0;

    for(i=0; i<count; i++){
        newtext = newtext + text;
    }

    return newtext;

};

// Do not edit below this line
module.exports = repeatString;
