//signup
const registerForm = document.querySelector(".registercontainer form");

if (registerForm) {
    registerForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const inputs = registerForm.querySelectorAll("input");

        const userData = {
            name: inputs[0].value,
            username: inputs[1].value,
            password: inputs[2].value,
            email: inputs[3].value
        };

        try {

            const res = await fetch("http://localhost:3000/api/users/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            const data = await res.json();

            alert("Registration successful!");
            window.location.href = "login.html";

        } catch (error) {
            console.error(error);
            alert("Error registering user");
        }
    });
}

//login
const loginForm = document.getElementById("loginarea");
const notfound = document.getElementById("notfound");

if (loginForm) {
    loginForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const inputs = loginForm.querySelectorAll("input");

        const username = inputs[0].value;
        const password = inputs[1].value;

        try {

            const res = await fetch("http://localhost:3000/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();

            if (res.status === 200) {

                alert("Login Successful");
                window.location.href = "dashboard.html";

            } else {

                notfound.innerText = data.message;
                notfound.style.display = "block";
            }

        } catch (error) {

            console.error(error);
            alert("Server error");

        }

    });
}
