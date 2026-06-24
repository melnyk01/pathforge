let habits = JSON.parse(localStorage.getItem('habits')) || [];
let history = JSON.parse(localStorage.getItem('history')) || [];
let goals = JSON.parse(localStorage.getItem('goals')) || [];
let habitList = document.querySelector('#habitList');
let dayResult = document.querySelector('#result');
let sessionHabits = [];


// Clearing buttons

//Clear records button
let clearRecordsButton = document.querySelector('#clearRecords')
clearRecordsButton.addEventListener('click', () => {
    localStorage.removeItem('history');
    while (dayResult.lastChild) {
        dayResult.removeChild(dayResult.lastChild);
    }
    alert('History was successfully cleared!')
});

// Clear habits button
let clearHabitsButton = document.querySelector('#clearHabits')
clearHabitsButton.addEventListener('click', () => {
    localStorage.removeItem('habits');
    while (habitList.lastChild && (habitList.lastChild.id != 'createHabit')) {
        habitList.removeChild(habitList.lastChild);
    }
    alert('Habits were successfully cleared!');
});

// Remove last goal
const RemoveLastGoalButton = document.querySelector('#removeGoal');
RemoveLastGoalButton.addEventListener('click', () => {
    const lastGoal = goals.pop()
    goalList.removeChild(goalList.lastChild);
    localStorage.setItem('goals', JSON.stringify(goals));
    alert(`${lastGoal} was successfully removed!`);
});

// Creating new goal
const goalList = document.querySelector('#goalList');
const createGoal = document.querySelector('#createGoal');
createGoal.addEventListener('click', () => {
    const newGoalId = prompt('What would you like to accomplish this year?');
    const newGoal = document.createElement('li');
    goalList.appendChild(newGoal);
    newGoal.appendChild(document.createTextNode(newGoalId));
    goals.push(newGoalId);
    localStorage.setItem('goals', JSON.stringify(goals));
});

//Creating new habit

let createHabit = document.querySelector('#createHabit');
createHabit.addEventListener('click', () => {
    const newHabitId = prompt('What habit would you like to track?');
    const newHabit = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.id = newHabitId;
    input.type = 'checkbox';
    habitList.appendChild(newHabit);
    newHabit.appendChild(label);
    label.appendChild(input);
    label.appendChild(document.createTextNode(newHabitId));
    sessionHabits.push(input);
    
})

// Saving the day

let save = document.querySelector('#save');
save.addEventListener('click', () => {

    let today = {
    }
    let date = new Date().toISOString().split('.')[0];
    today.date = date;
    for (let habit of sessionHabits) {
        let habitData = {
            id: habit.id,
            checked: habit.checked,
        };
        habits.push(habitData);
        if (habitData.checked) {
            today[habitData.id] = 'Done!'
            habitData.checked = false
        } else {
            today[habitData.id] = 'Failed!'
        }
    }
    history.push(today);
    localStorage.setItem('history', JSON.stringify(history));
    localStorage.setItem('habits', JSON.stringify(habits));
    alert('Day has been successfully saved!');
})

// Display habits

if (habits.length > 0) {
    for (habit of habits) {
        const newHabit = document.createElement('li');
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.id = habit.id;
        input.type = 'checkbox';
        habitList.appendChild(newHabit);
        newHabit.appendChild(label);
        label.appendChild(input);
        label.appendChild(document.createTextNode(habit.id));
    }    
}

// Display goals

if (goals.length > 0) {
    for (goal of goals) {
        const newGoal = document.createElement('li');
        goalList.appendChild(newGoal);
        newGoal.appendChild(document.createTextNode(goal));    
    }
}

// Prints records; Reversed to get a new data first

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


