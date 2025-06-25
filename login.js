const savedUserName = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

document.getElementById("loginForm").addEventListener("submit", function (log) {
    log.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("login-password").value.trim();

    if (password.length < 6) {
        alert("Incorrect password")
    }

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    if (username === savedUserName && password === savedPassword) {
        alert("Log in successful! ✅");
        //Links to the index.html to display the to-do-list
    setTimeout(() => {
        window.location.href = "../Main-page/index.html";
    }, 2000);
    } else {
        alert("Incorrect password");
    }

});

    const userName = document.querySelector("#username");

window.addEventListener("DOMContentLoaded", () => {
    if (savedUserName) {
        userName.value = savedUserName;
    } else {
        userName.placeholder = "No user found. Please sign up.";
    }

});