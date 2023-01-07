const billAmountInput = document.querySelector("#bill-amount");
const cashGivenInput = document.querySelector("#cash-given");
const button = document.querySelector("#btn");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".noOfNotes");
var notes = [2000, 500, 100, 20, 10, 5, 1];

function clickEventlistner() {
  var billAmount = billAmountInput.value;
  var cashGiven = cashGivenInput.value;
  if (billAmount > 0) {
    if (cashGiven >= billAmount) {
      hiddenErrorMessage();
      var returnAmount = cashGiven - billAmount;
      for (let i = 0; i < notes.length; i++) {
        var numberOfNotes = Math.trunc(returnAmount / notes[i]);
        noOfNotes[i].innerText = numberOfNotes;
        returnAmount = returnAmount % notes[i];
      }
    } else {
      showErrorMessage("check2");
    }
  } else {
    showErrorMessage("check1");
  }
}

function hiddenErrorMessage() {
  errorMessage.style.display = "none";
}

function showErrorMessage(message) {
  errorMessage.style.display = "block";
  errorMessage.innerText = message;
}
