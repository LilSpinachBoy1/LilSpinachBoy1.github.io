const form = document.getElementById("login_form");
const btn = document.getElementById("submit_btn");

// Advin if you're seeing this I am not happy with you
const users = [["Sam", "admin1"], ["Holly", "admin2"], ["Advin", "poopyface12345698"], ["Reese", "ILoveCSS"]];

function validate() {
    const username = form.username.value;
    const password = form.password.value;

    let valid = false;
    for (let x = 0; x < users.length; x++) {
        if (users[x][0] === username && users[x][1] === password) {
            window.location.href = "HOMEPAGE/home.html";
            valid = true;
            break;
        }
    }

    if (! valid) {alert("Invalid Credentials!");}
}

btn.addEventListener("click", validate);