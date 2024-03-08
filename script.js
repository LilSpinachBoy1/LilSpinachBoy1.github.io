const form = document.getElementById("login_form");

// Advin if you're seeing this I am not happy with you
const users = [["Sam", "admin1"], ["Holly", "admin2"], ["Advin", "poopyface12345698"], ["Reese", "ILoveCSS"]];

function validate(event) {
    event.preventDefault(); // Prevent default form submission

    const username = form.username.value;
    const password = form.password.value;

    let valid = false;
    for (let x = 0; x < users.length; x++) {
        if (users[x][0] === username && users[x][1] === password) {
            window.location.replace("HOMEPAGE/home.html");
            valid = true;
            break;
        }
    }

    if (! valid) {alert("Invalid Credentials!");}
}