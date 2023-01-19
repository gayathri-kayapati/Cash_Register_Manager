const billAmountInput = document.querySelector(".bill-amount");
const cashGivenInput = document.querySelector(".cash-given");
const button = document.querySelector("#btn");
const errorMessage = document.querySelector("#error-message");
const noOfNotesArr = document.querySelectorAll(".noOfNotes");
var notes = [2000, 500, 100, 20, 10, 5, 1];
var specialChar = "/^[!@#$%^&*()_+-=[]{};'\\|,.<>/?]*$/;";

function clickEventlistner() {
  var billAmount = parseInt(billAmountInput.value);
  var cashGiven = parseInt(cashGivenInput.value);
  if (billAmount > 0) {
    if (cashGiven >= billAmount) {
      hiddenErrorMessage();
      var returnAmount = cashGiven - billAmount;
      for (let i = 0; i < notes.length; i++) {
        noOfNotesArr[i].innerText = Math.trunc(returnAmount / notes[i]);
        returnAmount = returnAmount % notes[i];
      }
    } else {
      showErrorMessage("Please give more than or equal to bill amount");
    }
  } else {
    showErrorMessage("Please enter proper bill amount");
  }
}

function hiddenErrorMessage() {
  errorMessage.style.display = "none";
}

function showErrorMessage(message) {
  errorMessage.style.display = "block";
  errorMessage.style.color = "red";
  errorMessage.innerText = message;
}
