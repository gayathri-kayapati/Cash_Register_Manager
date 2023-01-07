const billAmount = document.getElementById("bill-amount");
const cashGiven = document.querySelector("#cash-given");
const button = document.querySelector("#btn");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelector(".noOfNotes");
var notes = [2000, 500, 100, 20, 10, 5, 1];

function clickEventlistner() {
  if (billAmount > 0) {
    if (cashGiven >= billAmount) {
      hiddenErrorMessage();
      var returnAmount = cashGiven - billAmount;
      for (let i = 0; i < notes.length - 1; i++) {
        var numberOfNotes = Math.trunc(returnAmount / notes[i]);
        noOfNotes.innerText = numberOfNotes;
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
  errorMessage.style.disply = "none";
}

function showErrorMessage(message) {
  errorMessage.style.disply = "block";
  errorMessage.innerText = message;
}
