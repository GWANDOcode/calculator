const numberButtons = document.querySelector(".number-buttons").childNodes;
const operatorButtons = document.querySelector(".operators").childNodes;
const displayCalcCurrent = document.querySelector(".display-calc-current");
const displayCalcPrev = document.querySelector(".display-calc-prev");

let currentNumber;
let prevNumber;
let mathType;
let result = "";


/* -------------------------------------------------------------------------- */
/*                                                                            */
/* >     eventlistener for numberbuttons      <                               */
/*                                                                            */
/* -------------------------------------------------------------------------- */

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        const dataValue = button.getAttribute("data-value");

        if (dataValue === "C") {
            if (currentNumber !== undefined) {
                clearCurrent();
            } else {
                clearAll();
            }
        }

        if (dataValue !== "C") {
            if(currentNumber === undefined) {
                currentNumber = dataValue;
            } else {
            currentNumber = concatToNum(dataValue);
            }
        }

        displayCurrent()
        console.log(currentNumber);
    })
})

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        const dataValue = button.getAttribute("data-value");

        currentNumber = parseFloat(currentNumber);

        if (dataValue !== "equals") {
            mathType = dataValue;
            if(result === "") {
                prevNumber = currentNumber;
            } else {
                prevNumber = result;
            }
            displayPrev();
            clearCurrent();
        }
        
        if (dataValue === "equals") {
            result = mathHandler(mathType, prevNumber, currentNumber);
            prevNumber = "";
            console.log(result);
            displayPrev();
            displayCurrent(result);
        }
    })
})


/* -------------------------------------------------------------------------- */
/*                                                                            */
/* >     String to number concat     <                                        */
/*                                                                            */
/* -------------------------------------------------------------------------- */

const concatToNum = function(num) {
    return `${currentNumber}${num}`;
}


/* -------------------------------------------------------------------------- */
/*                                                                            */
/* >     clear current/all      <                                             */
/*                                                                            */
/* -------------------------------------------------------------------------- */

const clearCurrent = function() {
    currentNumber = undefined;
    displayCurrent();
    if (result !== "") {
        prevNumber = result;
        displayPrev();
    }
}

const clearAll = function () {
    prevNumber = undefined;
    result = "";
    clearCurrent();
    displayPrev();
}


/* -------------------------------------------------------------------------- */
/*                                                                            */
/* >     display functions      <                                             */
/*                                                                            */
/* -------------------------------------------------------------------------- */

const displayCurrent = function(number = currentNumber) {
    displayCalcCurrent.textContent = number;
}

const displayPrev = function() {
    displayCalcPrev.textContent = prevNumber;
}


/* -------------------------------------------------------------------------- */
/*                                                                            */
/* >     calc functions      <                                                */
/*                                                                            */
/* -------------------------------------------------------------------------- */

const addition = function(add1, add2) {
   return add1 + add2;
}

const subtraction = function(sub1, sub2) {
    return sub1 - sub2;
}

const multiplication = function(mul1, mult2) {
    return mul1 * mult2;
}

const division = function(div1, div2) {
    return div1 / div2;
}

const mathHandler = function(operator, num1, num2) {
    switch (operator) {
        case "division":
            return division(num1, num2)
        case "multiplication":
            return multiplication(num1, num2)
        case "addition":
            return addition(num1, num2)
        case "subtraction":
            return subtraction(num1, num2)
    }
}


/* -------------------------------------------------------------------------- */
/*                                                                            */
/* >     Display Current time and Date      <                                 */
/*                                                                            */
/* -------------------------------------------------------------------------- */
const timeDisplay = document.querySelector(".time");
const dateDisplay = document.querySelector(".date");
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const todaysDate = new Date();
const date = `${monthNames[todaysDate.getMonth()]} ${todaysDate.getDay()} ${todaysDate.getFullYear()}`;

dateDisplay.textContent = date;

const checkTimeTwoNum = function(time) {
    if(time.toString().length === 1) {
        return `0${time}`;
    }
    return time;
}

let currentTime = `${checkTimeTwoNum(todaysDate.getHours())}
:${checkTimeTwoNum(todaysDate.getMinutes())}
:${checkTimeTwoNum(todaysDate.getSeconds())}`;
timeDisplay.textContent = currentTime;

setInterval(() => {
    const currentDate = new Date();
    currentTime = `${checkTimeTwoNum(currentDate.getHours())}
    :${checkTimeTwoNum(currentDate.getMinutes())}
    :${checkTimeTwoNum(currentDate.getSeconds())}`;
    timeDisplay.textContent = currentTime;
}, 1000)
