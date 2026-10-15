let button = document.querySelector(".calculator div .btn-solid");

button.addEventListener("click", function(event) {
    let int1 = parseInt(document.querySelector(".calculator div div:nth-child(1) input").value);
    let int2 = parseInt(document.querySelector(".calculator div div:nth-child(3) input").value);
    let operation = document.querySelector(".calculator div div:nth-child(2) input").value;
    let answer = document.querySelector(".calculator div p");
    let result = 0;
    switch (operation) {
        case "+":
            result = int1 + int2;
            break;
        case "-":
            result = int1 - int2;
            break;
        case ":":
            result = int1 / int2;
            break;
        case "*":
            result = int1 * int2;
            break;
        case "%":
            result = int1 % int2;
            break;
        default:
            break;
    }

    answer.innerHTML = "Result: " + result;
});