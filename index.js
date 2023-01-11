let userInput = document.querySelector("#main-up-input")
let zero = document.querySelector("#zero")
let one = document.querySelector("#one")
let tow = document.querySelector("#tow")
let three = document.querySelector("#three")
let four = document.querySelector("#four")
let five = document.querySelector("#five")
let six = document.querySelector("#six")
let seven = document.querySelector("#seven")
let eigt = document.querySelector("#eigt")
let nine = document.querySelector("#nine")
let add = document.querySelector("#add")
let minus = document.querySelector("#minus")
let dubole = document.querySelector("#dubole")
let div = document.querySelector("#div")
let dot = document.querySelector("#dot")
let equal = document.querySelector("#equal")
let c = document.querySelector("#clear")
let output = document.querySelector("#main-down-output")

// btn styles
let styleLightBtn = document.querySelector(".style-normal")
let styleDarkBtn = document.querySelector(".style-dark")
let styleNeonBtn = document.querySelector(".style-neon")

// list of all the buttons
let listOfNumbers = ["zero", "one", "tow", "three", "four", "five", "six",
 "seven", "eigt", "nine", "add", "minus", "dubole", "div", "dot", "equal", "clear"]

// array of all numbers after split
let numbersSplited = []

// פונקציה של שינוי צבע בלחיצה
function colorChange(buttonName){
    buttonName.classList.add("btn-pressed")
    setTimeout(function(){
        buttonName.classList.remove("btn-pressed")
    }, 100)
}

// בדיקה של קליקים עם המקלדת


    document.body.addEventListener('keydown', function(event){
        switch (event.key) {
            case "Backspace": userInput.innerHTML = "", colorChange(c)
            break;
            case "+": userInput.innerHTML += "+", colorChange(add)
            break;
            case "-": userInput.innerHTML += "-", colorChange(minus)
            break;
            case "*": userInput.innerHTML += "x", colorChange(dubole)
            break;
            case "%": userInput.innerHTML += "%", colorChange(div)
            break;
            case ".": userInput.innerHTML += ".", colorChange(dot)
            break;
            case "0": userInput.innerHTML += 0, colorChange(zero)
            break;
            case "1": userInput.innerHTML += 1, colorChange(one)
            break;
            case "2": userInput.innerHTML += 2, colorChange(tow)
            break;
            case "3": userInput.innerHTML += 3, colorChange(three)
            break;
            case "4": userInput.innerHTML += 4, colorChange(four)
            break;
            case "5": userInput.innerHTML += 5, colorChange(five)
            break;
            case "6": userInput.innerHTML += 6, colorChange(six)
            break;
            case "7": userInput.innerHTML += 7, colorChange(seven)
            break;
            case "8": userInput.innerHTML += 8, colorChange(eigt)
            break;
            case "9": userInput.innerHTML += 9, colorChange(nine)
            break;
            case "Enter": let numbers = userInput.innerHTML.match(/[0-9]+/g);
            console.log(numbers)
            colorChange(equal)
            let notNumbers = userInput.innerHTML.split(/[0-9]+/g)
            notNumbers.shift()
            notNumbers.pop()
            console.log(notNumbers)


            // now i am making new array and insert [num poerator num operatoe num...]
            let fNewList = []
            for (let i = 0; i < numbers.length; i++) {
                fNewList.push(numbers[i])
                fNewList.push(notNumbers[i])
            }
            fNewList.pop()
            console.log(fNewList)


            // בודק אם יש נקודה בין 2 מספרים ואז מכין מספר שהוא לא שלם
            for (let i = 0; i < fNewList.length; i++) {
                if (fNewList[i] === '.') {
                    let decimalNum = fNewList[i - 1] + '.' + fNewList[i + 1];
                    fNewList.splice(i - 1, 3, parseFloat(decimalNum));
                    i--;
                }
            }
            console.log(fNewList);
            
            // now i am taking the array fNewList and changing the strings numbers to ints
            let sNewList = []

            for (let i = 0; i < fNewList.length; i++) {
                if (fNewList[i] !== "+" && fNewList[i] !== "-" && fNewList[i] !== "x" &&
                 fNewList[i] !== "%")
                {
                    sNewList.push(parseFloat(fNewList[i]))
                }else{
                    sNewList.push(fNewList[i])
                }
            }
            console.log(sNewList)

            // בודק את כל האופטרטורים של הכפל והחילוק ומבצע את הפעולות
            let i = 1
            while (i < sNewList.length) {
                if (sNewList[i] === 'x' || sNewList[i] === '%') {
                    let result = 0;
                    switch (sNewList[i]) {
                        case "x":
                            result = sNewList[i - 1] * sNewList[i + 1];
                            break;
                        case '%':
                            result = sNewList[i - 1] / sNewList[i + 1];
                            break;
                    }
                    sNewList.splice(i - 1, 3, result);
                } else {
                    i += 2;
                }
            }
            
          console.log(sNewList)  


            // בודק את כל האופטרטורים של החיבור והחיסור ומבצע את הפעולות
            i = 1;
            while (i < sNewList.length) {
                if (sNewList[i] === '+' || sNewList[i] === '-') {
                    let result = 0;
                    switch (sNewList[i]) {
                        case '+':
                            result = sNewList[i - 1] + sNewList[i + 1];
                            break;
                        case '-':
                            result = sNewList[i - 1] - sNewList[i + 1];
                            break;
                }
                sNewList.splice(i - 1, 3, result);
                } else {
                i += 2;
                }
            }

            console.log(sNewList[0])
            userInput.innerHTML = sNewList[0]
            break;
            default:
                break;
        }
    })



// numbers clicks behavior, בדיקה של קליקים עם העכבר


listOfNumbers.forEach(number => {
    switch (number) {
        case "zero": zero.addEventListener("click", function(){
            userInput.innerHTML += 0
            colorChange(zero)
        })
        break;
        case "one": one.addEventListener("click", function(){
            userInput.innerHTML += 1
            colorChange(one)
        })
        break;
        case "tow": tow.addEventListener("click", function(){
            userInput.innerHTML += 2
            colorChange(tow)
        })
        break;
        case "three": three.addEventListener("click", function(){
            userInput.innerHTML += 3
            colorChange(three)
        })
        break
        case "four": four.addEventListener("click", function(){
            userInput.innerHTML += 4
            colorChange(four)
        })
        break
        case "five": five.addEventListener("click", function(){
            userInput.innerHTML += 5
            colorChange(five)
        })
        break
        case "six": six.addEventListener("click", function(){
            userInput.innerHTML += 6
            colorChange(six)
        })
        break;
        case "seven": seven.addEventListener("click", function(){
            userInput.innerHTML += 7
            colorChange(seven)
        })
        break
        case "eigt": eigt.addEventListener("click", function(){
            userInput.innerHTML += 8
            colorChange(eigt)
        })
        break
        case "nine": nine.addEventListener("click", function(){
            userInput.innerHTML += 9
            colorChange(nine)
        })
        break
        case "add": add.addEventListener("click", function(){
            userInput.innerHTML += "+"
            colorChange(add)
        })
        break;
        case "minus": minus.addEventListener("click", function(){
            userInput.innerHTML += "-"
            colorChange(minus)
        })
        break
        case "dubole": dubole.addEventListener("click", function(){
            userInput.innerHTML += "x"
            colorChange(dubole)
        })
        break
        case "div": div.addEventListener("click", function(){
            userInput.innerHTML += "%"
            colorChange(div)
        })
        break  
        case "dot": dot.addEventListener("click", function(){
            userInput.innerHTML += "."
            colorChange(dot)
        })
        break    
        case "equal": equal.addEventListener("click", function(){
            let numbers = userInput.innerHTML.match(/[0-9]+/g);
            console.log(numbers)
            colorChange(equal)
            let notNumbers = userInput.innerHTML.split(/[0-9]+/g)
            notNumbers.shift()
            notNumbers.pop()
            console.log(notNumbers)


            // now i am making new array and insert [num poerator num operatoe num...]
            let fNewList = []
            for (let i = 0; i < numbers.length; i++) {
                fNewList.push(numbers[i])
                fNewList.push(notNumbers[i])
            }
            fNewList.pop()
            console.log(fNewList)


            // בודק אם יש נקודה בין 2 מספרים ואז מכין מספר שהוא לא שלם
            for (let i = 0; i < fNewList.length; i++) {
                if (fNewList[i] === '.') {
                    let decimalNum = fNewList[i - 1] + '.' + fNewList[i + 1];
                    fNewList.splice(i - 1, 3, parseFloat(decimalNum));
                    i--;
                }
            }
            console.log(fNewList);
            
            // now i am taking the array fNewList and changing the strings numbers to ints
            let sNewList = []

            for (let i = 0; i < fNewList.length; i++) {
                if (fNewList[i] !== "+" && fNewList[i] !== "-" && fNewList[i] !== "x" &&
                 fNewList[i] !== "%")
                {
                    sNewList.push(parseFloat(fNewList[i]))
                }else{
                    sNewList.push(fNewList[i])
                }
            }
            console.log(sNewList)

            // בודק את כל האופטרטורים של הכפל והחילוק ומבצע את הפעולות
            let i = 1
            while (i < sNewList.length) {
                if (sNewList[i] === 'x' || sNewList[i] === '%') {
                    let result = 0;
                    switch (sNewList[i]) {
                        case "x":
                            result = sNewList[i - 1] * sNewList[i + 1];
                            break;
                        case '%':
                            result = sNewList[i - 1] / sNewList[i + 1];
                            break;
                    }
                    sNewList.splice(i - 1, 3, result);
                } else {
                    i += 2;
                }
            }
            
          console.log(sNewList)  


            // בודק את כל האופטרטורים של החיבור והחיסור ומבצע את הפעולות
            i = 1;
            while (i < sNewList.length) {
                if (sNewList[i] === '+' || sNewList[i] === '-') {
                    let result = 0;
                    switch (sNewList[i]) {
                        case '+':
                            result = sNewList[i - 1] + sNewList[i + 1];
                            break;
                        case '-':
                            result = sNewList[i - 1] - sNewList[i + 1];
                            break;
                }
                sNewList.splice(i - 1, 3, result);
                } else {
                i += 2;
                }
            }

            console.log(sNewList[0])
            userInput.innerHTML = sNewList[0]

        })
        break;
        case "clear": clear.addEventListener("click", function(){
            userInput.innerHTML = ""
            colorChange(clear)
        })
        break;
        default:
            break;
    }
});

// שינוי של הסטייל לכל הדף ע"י לחיצה על הכפתורים

let cssLink = document.getElementsByTagName("link")[0];

styleLightBtn.addEventListener("click",function(){
    cssLink.href = "light.css"
    colorChange(styleLightBtn)
})
styleDarkBtn.addEventListener("click",function(){
    cssLink.href = "dark.css"
    colorChange(styleDarkBtn)
})
styleNeonBtn.addEventListener("click",function(){
    cssLink.href = "neon.css"
    colorChange(styleNeonBtn)
})