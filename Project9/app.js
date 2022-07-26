/**
 Date - 25/5/2022
 Author : Arif Islam Bhuiya
 Description: Color Picker Application with huge dom functionalities
 */

let div = null;

window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const output = document.getElementById("output");
  const output2 = document.getElementById("output2");
  const changeBtn = document.getElementById("change-btn");
  const copyBtn = document.getElementById("copy-btn");
  const copyBtn2 = document.getElementById("copy-btn2");

  changeBtn.addEventListener("click", function () {
    const color = generateColorDecimal();
    const hex = generateHexColor(color);
    const rgb = generateRGBColor(color);
    root.style.backgroundColor = hex;
    output.value = hex.substring(1);
    output2.value = rgb;
  });

  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(`#${output.value}`);
    if (div !== null) {
      div.remove();
      div = null;
    }
    if (isValidHex(output.value)) {
      generateToastMessage(`#${output.value} is copied!`);
    } else {
      alert("Invalid Color Code");
    }
  });

  copyBtn2.addEventListener("click", function () {
    navigator.clipboard.writeText(`${output.value}`);
    if (div !== null) {
      div.remove();
      div = null;
    }
    if (isValidHex(output.value)) {
      generateToastMessage(`${output2.value} is copied!`);
    } else {
      alert("Invalid Color Code");
    }
  });

  output.addEventListener("keyup", function (e) {
    const color = e.target.value;
    if (color) {
      output.value = color.toUpperCase();
    }
    if (isValidHex(color)) {
      root.style.backgroundColor = `#${color}`;
      output2.value = hexToRgb(color);
    }
  });
}

// function 1  generate three random decimal number for red green blue and return as an object
function generateColorDecimal() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return {
    red,
    green,
    blue,
  };
}

// function 2 generate hex color
function generateHexColor({ red, green, blue }) {
  //   const { red, green, blue } = generateColorDecimal();

  //   const twoCodeRed = red <= 9 ? `0${red}` : red.toString(16);
  //   const twoCodeGreen = green <= 9 ? `0${green}` : green.toString(16);
  //   const twoCodeBlue = blue <= 9 ? `0${blue}` : blue.toString(16);

  const getTwoCode = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };

  return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(
    blue
  )}`.toUpperCase();
}

//function 3 - generate rgb color
function generateRGBColor({ red, green, blue }) {
  //   const { red, green, blue } = generateColorDecimal();
  return `rgb(${red},${green},${blue})`;
}

/**
 * create hex color to rgb
 * @param {string} hex
 */

function hexToRgb(hex) {
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4), 16);

  return `rgb(${red},${green},${blue})`;
}

function generateToastMessage(msg) {
  div = document.createElement("div");
  div.innerHTML = msg;
  div.className = "toast-message toast-message-slid-in";

  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slid-in");
    div.classList.add("toast-message-slid-out");
    div.addEventListener("animationend", function () {
      div.remove();
    });
  });

  document.body.appendChild(div);
}
/**
 * @param {string} color : ;
 */

function isValidHex(color) {
  if (color.length !== 6) return false;
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}

// Steps

// Step 1 - create onload handler

// Step 2 - random color generator function

// Step 3 - collect all necessary references

// Step 4 - handler the change button click event

// Step 5 - handler the copy button click event

// Step 6 - activate toast message

// Step 7 - create dynamic toast message

// Step 8 - clear toast message

// Step 9 - create isValidHex function

// Step 10 - Implement change handler on input field

// Step 11 - Prevent coping hex code if is not valid

// Step 12 - refactor the color generator function

// Step 13 - update color code to display rgb color

// Step 14 -create hex to rgb function

// Step 15 - update change handler

// Step 16 - implement copy function
