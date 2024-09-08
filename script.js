let colorText = document.querySelector(".code-text"); // color code
let color1 = document.querySelector(".color1"); // 1st color
let color2 = document.querySelector(".color2"); // 2nd color
let displayedColor = document.getElementById("gradient"); // color display
let linearDirection = document.getElementsByName("directions")[0]; //Select box
let copyColor = document.querySelector(".copy-icon"); // Copy icon

//displays default CSS RGBA values for linear-gradient
function currentSettings() {
  let CSSprop = window
    .getComputedStyle(displayedColor, null)
    .getPropertyValue("background-image");
  colorText.textContent = CSSprop;
}

currentSettings();

function returnColor() {
  displayedColor.style.background =
    "linear-gradient(" +
    linearDirection.value +
    ", " +
    color1.value +
    "," +
    color2.value +
    ")";

  currentSettings();
}

document.querySelector('select[name="directions"]').onchange = returnColor;
color1.addEventListener("input", returnColor);
color2.addEventListener("input", returnColor);

// Event listeners for copying
copyColor.addEventListener("click", () => {
  const copyValue = colorText.textContent;
  navigator.clipboard.writeText(copyValue);

  const icon = copyColor.querySelector("i");
  // Change icon to checkmark
  icon.classList.remove("fa-regular", "fa-copy");
  icon.classList.add("fa-solid", "fa-check");

  // Revert the icon after 3 seconds
  setTimeout(() => {
    icon.classList.remove("fa-solid", "fa-check");
    icon.classList.add("fa-regular", "fa-copy");
  }, 3000);
});
