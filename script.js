/*

  #####  ####### #######    #     #    #     #####  #     # ####### ######  
 #     # #          #       #     #   # #   #     # #     # #       #     # 
 #       #          #       #     #  #   #  #       #     # #       #     # 
 #  #### #####      #       ####### #     #  #####  ####### #####   #     # 
 #     # #          #       #     # #######       # #     # #       #     # 
 #     # #          #       #     # #     # #     # #     # #       #     # 
  #####  #######    #       #     # #     #  #####  #     # ####### ######  
                                                                            
*/

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
    const pass_value = -71244912;  // Store the hashed value of the super secret code

    // Get the hashing form from DOM, and create an event listener for its submission
    document.getElementById("password_form").addEventListener("submit", function(event) {
        console.log("Submission!");
        event.preventDefault();
        var hashed_input = generate_hash(document.getElementById("inp_box").value);  // Get the hashed value of the input
        if (hashed_input === pass_value) {  // Check if the input equals the correct password
            console.log("Valid input, switching to homepage");
            window.location = "Behind the veil/homepage.html";
        } else {
            console.log("Invalid input");
            alert("Incorrect Password! Try again...");
        }
    });
});