
 let habits = []
 let completedHabits = {

}

 let habitRun = document.querySelector('input#run');
 let habitStudy = document.querySelector('input#study');
 let habitRead = document.querySelector('input#read');
 let dayResult = document.querySelector('#result');

habits.push(habitRun, habitStudy, habitRead);

let history = [ 

]

// Saving the day
let save = document.querySelector('#save')
save.addEventListener('click', () => {
    let today = {
    }
    let date = new Date().toISOString().split('.')[0];
    today.date = date;
    for (let habit of habits) {
        if (habit.checked) {
            completedHabits[habit.id] = 'Done!'
        } else {
            completedHabits[habit.id] = 'Failed!'
        }
        today[habit.id] = completedHabits[habit.id];
    }
    history.push(today);
    localStorage.setItem('history', JSON.stringify(history));
    alert('Day has been successfully saved!');
})
// Get history data from local storage and printing it
history = JSON.parse(localStorage.getItem('history') || {});
console.table(JSON.parse(localStorage.getItem('history')));
console.log(history.reverse());
for (record of history) {
    let previousRecord = document.createElement('p');
    dayResult.appendChild(previousRecord);
    previousRecord.textContent = record.date

    let runResult = document.createElement('div');
    let studyResult = document.createElement('div');
    let readResult = document.createElement('div');
    runResult.textContent = `Run: ${record.run}`
    studyResult.textContent = `Study: ${record.study}`
    readResult.textContent = `Read: ${record.read}`
    dayResult.appendChild(runResult);
    dayResult.appendChild(studyResult);
    dayResult.appendChild(readResult);
}
