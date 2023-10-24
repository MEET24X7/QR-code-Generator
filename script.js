// Selecting elements from the HTML document using their class names and IDs.
const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");

// Initializing a variable to store the previous input value.
let preValue;

// Adding a click event listener to the "Generate QR Code" button.
generateBtn.addEventListener("click", () => {
    // Getting the trimmed value from the input field.
    let qrValue = qrInput.value.trim();

    // Checking if the input value is empty or hasn't changed since the last generation.
    if(!qrValue || preValue === qrValue) return;

    // Storing the current input value as the previous value.
    preValue = qrValue;

    // Changing the button text to indicate the QR code is being generated.
    generateBtn.innerText = "Generating QR Code...";

    // Setting the source of the QR code image using a URL with the input data.
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;

    // Adding a "load" event listener to the image to track when the image is loaded.
    qrImg.addEventListener("load", () => {
        // Adding the "active" class to the wrapper to reveal the QR code.
        wrapper.classList.add("active");

        // Reverting the button text to the original state.
        generateBtn.innerText = "Generate QR Code";
    });
});


// Adding a keyup event listener to the input field to handle changes in input.
qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        // If the input is empty, remove the "active" class and reset the previous value.
        wrapper.classList.remove("active");
        preValue = "";
    }
});