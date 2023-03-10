const numberButtons = document.querySelector(".number-buttons").childNodes;
const displayCalcCurrent = document.querySelector(".display-calc-current");
const displayCalcPrev = document.querySelector(".display-calc-prev");

let currentNumber;
let prevNumber;

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        const dataValue = button.getAttribute("data-value");

        if (dataValue === "C") {
            if (currentNumber !== undefined) {
                clearCurrent();
            } else {

            }
        };

        if (dataValue !== "C" && dataValue !== ",") {
            if(currentNumber === undefined) {
                currentNumber = dataValue;
            } else {
            currentNumber = concatToNum(dataValue);
            }; 
        };

        displayCurrent()
        console.log(currentNumber);
    });
});

//String to number concat
const concatToNum = function(num) {
    return `${currentNumber}${num}`;
};  

//clear current/all 
const clearCurrent = function() {
    currentNumber = undefined;
    displayCurrent();
};

const clearAll = function () {
    prevNumber = undefined;
    clearCurrent();
};

//display functions
const displayCurrent = function() {
    displayCalcCurrent.textContent = currentNumber;
};

//calc functions 
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