//your JS code here. If required.
const termsCheckbox = document.getElementById("terms");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("myForm");

// Enable submit button only when checkbox is checked
termsCheckbox.addEventListener("change", function () {
  submitBtn.disabled = !this.checked;

  // Auto-submit the form when checkbox is checked and all fields are valid
  if (this.checked && form.checkValidity()) {
    form.submit();
  }
});
