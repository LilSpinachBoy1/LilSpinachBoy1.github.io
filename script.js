const form = document.getElementById("login_form");

// Advin if you're seeing this I am not happy with you
const users = [["Sam", "admin1"], ["Holly", "cheeseLover123"], ["Advin", "poopyface12345698"], ["Reese", "ILoveCSS"], ["SpecialDaddy", "yourmum123"]];

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

// Simple function to redirect to a given url or file location
function redirect(location) {
    console.log(`Attempting to redirect to: "${location}"`)
    window.location.href = location
}