const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0 || typeof(num1) !=  "number" || typeof(num2) != "number") return "ERROR";
    let res = 0;
    if(num1 > num2) [num1, num2] = [num2, num1];
    while(num1 <= num2) {
        res +=  num1;
        num1++;
    } 
    return res;
};

// Do not edit below this line
module.exports = sumAll;
