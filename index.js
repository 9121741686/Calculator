let result = document.querySelector(".result");
let buttons = document.querySelectorAll(".buttons div");
let count = 0; // Declare count outside the event listener to keep track of consecutive operator presses

buttons.forEach(element => {
    element.addEventListener("click", () => {
        if (element.innerHTML === "=") {
            let output = eval(result.innerHTML);
            result.innerHTML = output;
            return;
        }
        if (element.innerHTML === "AC") {
            result.innerHTML = "0";
            count = 0; // Reset count when AC is pressed
            return;
        }
        if (element.innerHTML === "Del") {
            if (result.innerHTML !== "0")
                result.innerHTML = result.innerHTML.slice(0, -1);
            else result.innerHTML = "0";
            return;
        }
        if (["%", "/", "*", "+", "-"].includes(element.innerHTML)) {
            if (count === 1) {
                result.innerHTML = result.innerHTML.slice(0, -1);
            }
            result.innerHTML += element.innerHTML;
            count = 1; // Set count to 1 when an operator is pressed
            return;
        }
        if (result.innerHTML === "0")
            result.innerHTML = "";
        count = 0; // Reset count when a number is pressed
        result.innerHTML += element.innerHTML;
    });
});
