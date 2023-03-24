
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

//Variable Defined
let currentValue = "0";

//Event Listener added for the clickk event
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonValue = button.value;
    switch (buttonValue) {
      case "C":
        currentValue = "";
      break;
      case "+":
      case "-":
      case "*":
      case "/":
        currentValue = currentValue + " " + buttonValue + " ";
        break;
      case "=":
        currentValue = eval(currentValue);
        break;
      default:
        if (currentValue === "0") {
          currentValue = buttonValue;
        } else {
          currentValue += buttonValue;
        }
    }
    display.value = currentValue;
  });
});
