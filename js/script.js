document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".letter-btn");

  // Event listener for the letter buttons
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const group = this.closest(".button-group");
      const result = group.querySelector(".result");
      const hideButton = group.querySelector(".hide-btn");
      result.style.display = "block";
      hideButton.style.display = "block";
    });
  });

  // Event listener for the hide buttons
  const hideButtons = document.querySelectorAll(".hide-btn");
  hideButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const group = this.closest(".button-group");
      const result = group.querySelector(".result");
      result.style.display = "none";
      this.style.display = "none";
    });
  });
});
