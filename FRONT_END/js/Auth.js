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

            const res = await fetch(`${API_BASE}/api/users/signup`, {
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

            const res = await fetch(`${API_BASE}/api/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();

            if (res.status === 200) {

                localStorage.setItem('profile-id', data.user._id);
                localStorage.setItem('profile-name', data.user.name || '');
                localStorage.setItem('profile-email', data.user.email || '');
                localStorage.setItem('profile-course', data.user.course || '');
                localStorage.setItem('profile-branch', data.user.branch || '');
                localStorage.setItem('profile-year', data.user.year || '');

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