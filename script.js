function generate_hash(str) {
    var hash = 0,
    i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

// Event listener to only run contained code when the page contents have loaded
document.addEventListener('DOMContentLoaded', function() {
    const valueSam = -71244912;  // Store the hashed value of the super secret code
    const result_div = document.getElementById("hash_result");  // The text to update when a result is found

    // Get the hashing form from DOM, and create an event listener for its submission
    document.getElementById("hashing_form").addEventListener("submit", function(event) {
        console.log("Submission!");
        event.preventDefault();
        var hashed_input = generate_hash(document.getElementById("inp_box").value);  // Get the hashed value of the input
        if (hashed_input === valueSam) {  // Check if the input equals the correct password
            result_div.innerText = "Valid!";
            console.log("Valid input");
        } else {
            result_div.innerText = "Nuh uh!";
            console.log("Invalid input");
        }
    });
});