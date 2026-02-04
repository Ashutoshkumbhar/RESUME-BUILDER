// Select login form
const loginForm = document.getElementById("loginarea");

// Listen for form submit
/* ================= LOGIN LOGIC ================= */

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputs = loginForm.querySelectorAll("input");
        const enteredUsername = inputs[0].value;
        const enteredPassword = inputs[1].value;

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            alert("No user found. Please register first.");
            return;
        }

        if (
            enteredUsername === storedUser.username &&
            enteredPassword === storedUser.password
        ){
            localStorage.setItem("loggedIn", "true");
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid username or password");
        }
    });
}



/* ================= REGISTER LOGIC ================= */

const registerForm = document.querySelector(".registercontainer form");

if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputs = registerForm.querySelectorAll("input");
        const roleSelect = document.getElementById("role");


        const userData = {
            fullname: inputs[0].value,
            username: inputs[1].value,
            password: inputs[2].value,
            role: roleSelect.value,
            phonenumber: inputs[3].value
        };

        if (!userData.role) {
            alert("Please select role");
            return;
        }

        localStorage.setItem("user", JSON.stringify(userData));

        alert("Registration successful!");
        window.location.href = "login.html"; // back to login
    });
}


