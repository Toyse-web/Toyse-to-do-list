document.getElementById("signupForm").addEventListener("submit", function (sub) {
    sub.preventDefault();

    const firstName = document.getElementById("firstname").value.trim();
    const lastName = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validate all fields
    const passErrors = [];
    if (!firstName) passErrors.push("First name is required.");
    if (!lastName) passErrors.push("Last name is required.");
    if (!email) passErrors.push("Input your email.");
    if (!/.+@.+\..+/.test(email)) passErrors.push("Invalid email");
    if (!password) passErrors.push("Insert password.");
    if (password.length < 6) passErrors.push("Password must be at least 6 characters.");
    if (!/[A-Z]/.test(password)) passErrors.push("Password must include at least one upperCase letter");
    if (!/[a-z]/.test(password)) passErrors.push("Password must include at least one lowerCase letter.");
    if (!/[0-9]/.test(password)) passErrors.push("Password must include at least one number.");
    if (!/[!@"£$%^*(),.?{}|<>]/.test(password)) passErrors.push("Password must include at least one special character.");

    if (passErrors.length > 0) {
        alert(passErrors.join(" /n ")); //Show all errors at once
        return;
    }

    let fullName = `${firstName} ${lastName}`;
    let passLog = password;

    // Save fullname to local storage
    localStorage.setItem("username", fullName);
    localStorage.setItem("password", passLog);

    alert("Account created successfully! ✅");
    this.reset();

    // window.location.href = "login.html";
    // This get delays before it display the login page
    setTimeout(() => {
        window.location.href = "../Login-page/login.html";
    }, 2000);
});

// Show and hide password
document.addEventListener("DOMContentLoaded", function () {
    const passInput = document.querySelector("#password");
    const togglePass = document.querySelector("#togglePassword");

    togglePass.addEventListener("click", function () {
        if (passInput.type === "password") {
            passInput.type = "text";
            togglePass.textContent === "🙈";
        } else {
            passInput.type = "password";
            togglePass.textContent = "👁️";
        }
    });
});


// document.getElementById("signupForm").ready(function() {
//     // function to show popup
//     function showPopup(message, duration = 3000) {
//         const popUp = document.querySelector("#popup");
//         const theMessage = document.querySelector(".popup-message", popUp);
//         const time = document.querySelector(".popup-timer", popUp);

//         // Set message
//         theMessage.text(message);

//         // Show popup
//         popUp.addClass("show");

//         // Animate timer
//         time.css("transition", `transform${duration}ms linear`);
//         time.css("transform", "scaleX()");

//         // Hide after duration
//         setTimeout(function() {
//             popUp.removeClass("show");
//             // Reset time for next use
//             setTimeout(() => {
//                 time.css("transition", "none");
//                 time.css("transform", "scaleX(1)");
//             }, 500);
//         }, duration);
//     }

//     // Check for success message
//     const checkMessage =  document.getElementById("signupForm");
//     if(checkMessage.hasAttribute("success")) {
//         showPopup("Created successfully");
//     }
// });