// Wait until the page has loaded to do anything
document.addEventListener("DOMContentLoaded", function() {
    const maths_current_time = document.getElementById("ma_tot_curr_week");
    const maths_button = document.getElementById("ma_start_stop_butt");


    let init_time = Date.now();
    let time = 0;
    let running = false;
    maths_current_time.innerText = "Time studied this week: " + time + " seconds.";

    // Listen for the button press
    maths_button.addEventListener("click", function() {
        console.log("Maths button pressed");
        
        // Toggle the running variable
        if (running) {
            running = false;
            maths_button.innerText = "Start timer";
            time_to_add = Date.now() - init_time;
            seconds = Math.floor(time_to_add / 1000);
            time += seconds;
            console.log(time);
        }
        else {
            running = true;
            maths_button.innerText = "Stop timer";
            init_time = Date.now();
        };

        maths_current_time.innerText = "Time studied this week: " + time + " seconds.";
    });
});