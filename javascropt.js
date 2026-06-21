 let habits = []
 let completedHabits = {

}

 let habitRun = document.querySelector('input#run');
 let habitStudy = document.querySelector('input#study');
 let habitRead = document.querySelector('input#read');

habits.push(habitRun, habitStudy, habitRead);

let save = document.querySelector('#save')
save.addEventListener('click', () => {
    for (let habit of habits) {
        if (habit.checked) {
            completedHabits[habit.id] = true
        } else {
            completedHabits[habit.id] = false
        }
    }

    alert('Day has been successfully saved!');
})