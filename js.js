let i = 0;

function tickUp() {
    i++;
    document.getElementById('counter').textContent = i;
}
function tickDown() {
    i--;
    document.getElementById('counter').textContent = i;
}


function runForLoop() {
    let counter = document.getElementById("counter").textContent;
    let result = "";

    for (let i = 0; i <= counter; i++) {
        result += i + " ";
    }
    document.getElementById("forLoopResult").textContent = result;
}


function showOddNumbers() {
    let counter = parseInt(document.getElementById("counter").textContent);
    let result = "";

    for (let i = 1; i <= counter; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }
    document.getElementById("oddNumberResult").textContent = result;
}


function addMultiplesToArray() {
    let counter = parseInt(document.getElementById("counter").textContent);
    let arr = [];

    for (let i = counter; i >= 5; i-- ) {
        if (i % 5 == 0) {
            arr.push(i);
        }
    }
    console.log(arr);
}


function printCarObject() {
    let car = {
        ctype: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cCOLOR: document.getElementById("carColor").value
    };

    console.log(car);
}


function loadCar(num) {
    let car;

    if (num === 1) car = carObject1;
    else if (num === 2) car = carObject2;
    else if (num === 3) car = carObject3;
    else return;

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}


function changeColor(num) {
    const para = document.getElementById("styleParagraph");

    if (num === 1) para.style.color = "red";
    else if (num === 2) para.style.color = "green";
    else if (num === 3) para.style.color = "blue";
}
