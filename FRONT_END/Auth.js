// Select login form
const loginForm = document.getElementById("loginarea");
const notfound = document.getElementById("notfound");

/* ================= LOGIN LOGIC ================= */

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputs = loginForm.querySelectorAll("input");
        const enteredUsername = inputs[0].value;
        const enteredPassword = inputs[1].value;

        if (!enteredUsername || !enteredPassword) {
            alert("Please fill all fields");
            return;
        }
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            notfound.innerText="User Not Found!";
            notfound.style.color = "red";
            notfound.style.display = "block";
            return;
        }

        if (
            enteredUsername === storedUser.username &&
            enteredPassword === storedUser.password
        ) {
            localStorage.setItem("loggedIn", "true");
            window.location.href = "dashboard.html";
        } else {
            notfound.innerText="Incorrect Username or password";
            notfound.style.color = "red";
            notfound.style.display = "block";
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
            emailid: inputs[3].value,
            collegename: inputs[4].value,
            role: roleSelect.value,
            phonenumber: inputs[5].value
        };

        if (!userData.role) {
            alert("Please select Year");
            return;
        }
        for (let key in userData) {
            if (!userData[key]) {
                alert("Please fill all fields");
                return;
            }
        }
        localStorage.setItem("user", JSON.stringify(userData));

        alert("Registration successful!");
        window.location.href = "login.html"; // back to login
    });
}


