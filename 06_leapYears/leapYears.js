const leapYears = function(year = 0) {

    let divBy4 = year % 4 === 0;
    let divBy100 = year % 100 === 0;
    let divBy400 = year % 400 === 0;

    // if(divBy4!==0) {return false;}
    // else if (divBy100!==0) {return true;}
    // else if (divBy400===0) {return true;}
    // else return false;

    return (divBy4) && (!divBy100  || divBy400);
    

};

// Do not edit below this line
module.exports = leapYears;
