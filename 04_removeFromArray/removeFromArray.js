
const removeFromArray = function(list=[], ...args) {

    const newlist = [];

    list.forEach((item) => { //for every item in list

        if(!args.includes(item)){ //if a particular item is not found in the args array
            newlist.push(item); //then push that item into the new list
        }

    });

    return newlist;
  
};

// Do not edit below this line
module.exports = removeFromArray;
