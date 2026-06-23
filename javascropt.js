let habits = [

]
let history = [
    
]
let habitList = document.querySelector('#habitList');
let habitRun = document.querySelector('input#run');
let dayResult = document.querySelector('#result');
habits.push(habitRun);

//Creating a new habit

let createHabit = document.querySelector('#createHabit')
createHabit.addEventListener('click', () => {
    const newHabit = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'checkbox'
    habitList.appendChild(newHabit);
    newHabit.appendChild(label);
    label.appendChild(input);
    label.appendChild(document.createTextNode(prompt('What habit would you like to track?')));
})

//Clear button

let clearButton = document.querySelector('#clear-records')
clearButton.addEventListener('click', () => {
    localStorage.removeItem('history');
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


