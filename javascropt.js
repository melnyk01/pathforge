let habits = [

]

let history = [
    
]

let habitRun = document.querySelector('input#run');
let habitStudy = document.querySelector('input#study');
let habitRead = document.querySelector('input#read');
let dayResult = document.querySelector('#result');
habits.push(habitRun, habitStudy, habitRead);

let clearButton = document.querySelector('#clear-records')
clearButton.addEventListener('click', () => {
    localStorage.clear();
    alert('History was successfully cleaned!')
});

// Saving the day
let save = document.querySelector('#save');
save.addEventListener('click', () => {
    let today = {
    }
    let date = new Date().toISOString().split('.')[0];
    today.date = date;
    for (let habit of habits) {
        if (habit.checked) {
            today[habit.id] = 'Done!'
        } else {
            today[habit.id] = 'Failed!'
        }
    }
    history.push(today);
    localStorage.setItem('history', JSON.stringify(history));
    alert('Day has been successfully saved!');
})
// Get history data from local storage and printing it

history = JSON.parse(localStorage.getItem('history')) || [];

// Reversed to get a new data first

if (history.length > 0) {
    for (record of history.reverse()) { 
        for (let [key, value] of Object.entries(record)) {
            const habit = document.createElement('div');
            habit.textContent = `${key}: ${value}`;
            dayResult.appendChild(habit); 
        }
        whiteSpace = document.createElement('div');
        whiteSpace.textContent = '---------------------------------'
        dayResult.appendChild(whiteSpace);
}
}


