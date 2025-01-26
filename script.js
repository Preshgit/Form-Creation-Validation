document.addEventListener("DOMContentLoaded", function () {
  // Form Selection
  const form = document.getElementById("registration-form");

  // Feedback Div Selection
  const feedbackDiv = document.getElementById("form-feedback");

  // Form Submission Event Listener
  form.addEventListener("submit", function (event) {
    // Prevent default form submission
    event.preventDefault();

    // Retrieve User Inputs
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Initialize Validation Variables
    let isValid = true;
    const messages = [];

    // Username Validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long");
    }

    // Email Validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Please enter a valid email address");
    }

    // Password Validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long");
    }

    // Feedback Display Logic
    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("registration-form");
//   const feedbackDiv = document.getElementById("form-feedback");

//   form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     // Retrieve and trim input values
//     const username = document.getElementById("username").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const password = document.getElementById("password").value.trim();

//     // Initialize validation variables
//     let isValid = true;
//     const messages = [];

//     // Username validation
//     if (username.length < 3) {
//       isValid = false;
//       messages.push("Username must be at least 3 characters long");
//     }

//     // Email validation
//     if (!email.includes("@") || !email.includes(".")) {
//       isValid = false;
//       messages.push("Please enter a valid email address");
//     }

//     // Password validation
//     if (password.length < 8) {
//       isValid = false;
//       messages.push("Password must be at least 8 characters long");
//     }

//     // Display feedback
//     feedbackDiv.style.display = "block";
//     if (isValid) {
//       feedbackDiv.textContent = "Registration successful!";
//       feedbackDiv.style.color = "#28a745";
//     } else {
//       feedbackDiv.innerHTML = messages.join("<br>");
//       feedbackDiv.style.color = "#dc3545";
//     }
//   });
// });
