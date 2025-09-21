
const output = document.getElementById("output");

//Check two numbers and return true if one of the number is 100 or if the sum of the two is 100
function checknumbers(){

    const firstNumber = Number(document.getElementById("firstNumber").value);
    const secondNumber= Number(document.getElementById("secondNumber").value);

    if (firstNumber === 100 || secondNumber === 100){
        output.textContent = "TRUE";
    } else if (firstNumber + secondNumber === 100) {
        output.textContent = "TRUE";
    } else {
        output.textContent = "FALSE";
    }
}
