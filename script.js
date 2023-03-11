const numberButtons = document.querySelector(".number-buttons").childNodes;
const operatorButtons = document.querySelector(".operators").childNodes;
const displayCalcCurrent = document.querySelector(".display-calc-current");
const displayCalcPrev = document.querySelector(".display-calc-prev");

let currentNumber;
let prevNumber;
let mathType;
let result;


/* -------------------------------------------------------------------------- */
/*                                                                            */
/* >     eventlistener for numberbuttons to create string on current     <    */
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
            currentNumber = parseFloat(currentNumber);
        }

        displayCurrent()
        console.log(currentNumber);
    })
})

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        const dataValue = button.getAttribute("data-value");

        if (dataValue !== "equals") {
            if (dataValue === "division") {
                mathType = "division";
            } else if (dataValue === "multiplication") {
                mathType = "multiplication";
            } else if (dataValue === "addition") {
                mathType = "addition";
            } else if (dataValue === "subtraction") {
                mathType = "subtraction";
            }
            prevNumber = currentNumber;
            displayPrev();
            clearCurrent();
        }
        
        if (dataValue === "equals") {
            result = mathHandler(mathType, prevNumber, currentNumber);
            prevNumber = "";
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
}

const clearAll = function () {
    prevNumber = undefined;
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