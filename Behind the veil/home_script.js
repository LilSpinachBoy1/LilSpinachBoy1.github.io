// Wait until the page has loaded to do anything
document.addEventListener("DOMContentLoaded", function() {
    const maths_current_time = document.getElementById("ma_tot_curr_week");

    const d = new Date();
    let time = d.getTime();
    maths_current_time.innerText = "Time studied this week: " + time;
});