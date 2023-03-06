const addition = function(add1, add2) {
   return add1 + add2;
};

const subtraction = function(sub1, sub2) {
    return sub1 - sub2;
};

const multiplication = function(mul1, mult2) {
    return mul1 * mult2;
};

const division = function(div1, div2) {
    return div1 / div2;
};

const mathHandler = function(num1, operator, num2) {
    return operator(num1, num2);
};