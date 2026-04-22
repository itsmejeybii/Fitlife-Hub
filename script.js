let selected = "";
let workouts = 0;
let calories = 0;

function selectProgram(program) {
    selected = program;
    document.getElementById("selectedProgram").innerText =
        "Selected: " + program;
}

function bookClass() {
    if (!selected) {
        alert("Please select a program first!");
        return;
    }

    let time = document.getElementById("time").value;
    alert("Booked " + selected + " at " + time);
}

function addWorkout() {
    workouts++;
    calories += Math.floor(Math.random() * 300);

    document.getElementById("workouts").innerText = workouts;
    document.getElementById("calories").innerText = calories;
}