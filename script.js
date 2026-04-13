const termsCheckbox = document.getElementById("terms");
const submitBtn = document.getElementById("submitBtn");

// Enable/disable submit button based on checkbox state
termsCheckbox.addEventListener("change", function () {
  submitBtn.disabled = !this.checked;
});