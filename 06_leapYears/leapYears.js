const leapYears = function(year = 0) {

    let divBy4 = year % 4;
    let divBy100 = year % 100;
    let divBy400 = year % 400;

    if(divBy4!==0) {return false;}
    else if (divBy100!==0) {return true;}
    else if (divBy400===0) {return true;}
    else return false;
    

};

// Do not edit below this line
module.exports = leapYears;
