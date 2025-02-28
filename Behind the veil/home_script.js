// Wait until the page has loaded to do anything
document.addEventListener("DOMContentLoaded", function() {
    const maths_current_time = document.getElementById("ma_tot_curr_week");
    const maths_button = document.getElementById("ma_start_stop_butt");

    const d = new Date()
    let init_time = d.getTime()
    let time = 0;
    let running = false;
    maths_current_time.innerText = "Time studied this week: " + time;

    // Listen for the button press
    maths_button.addEventListener("click", function() {
        console.log("Maths button pressed");
        
        // Toggle the running variable
        if (running) {
            running = false;
            maths_button.innerText = "Start timer";
        }
        else {
            running = true;
            maths_button.innerText = "Stop timer";
        };
    });
});