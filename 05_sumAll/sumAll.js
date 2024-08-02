const sumAll = function(start = 0, end = 0) {

    let sum = 0;
    let i = 0;

    if(!Number.isInteger(start) || !Number.isInteger(end)){return 'ERROR';}
    
    if(typeof(start)!=='number' || typeof(end)!=='number'){return 'ERROR';}

    if (start < 0 || end  < 0) {return 'ERROR'};

    if (start > end){
        start = start + end;
        end = start - end;
        start = start - end;
    }

    for(i=start; i <= end; i++){
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
