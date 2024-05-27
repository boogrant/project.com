function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let timeString = hours + ':' + minutes + ' ' + ampm;
    document.getElementById('time').textContent = timeString;

    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let day = now.getDay();
    let date = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();

    let firstDayOfMonth = new Date(year, month, 1).getDay(); // Get the first day of the month
    let daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the number of days in the current month

    let calendarDates = document.getElementById('calendar-dates');
    calendarDates.innerHTML = '';

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        let emptyCell = document.createElement('div');
        emptyCell.classList.add('calendar-date', 'empty');
        calendarDates.appendChild(emptyCell);
    }

    // Create grid for the entire month
    for (let i = 1; i <= daysInMonth; i++) {
        let cell = document.createElement('div');
        cell.classList.add('calendar-date');

        if (i === date && month === new Date().getMonth() && year === new Date().getFullYear()) {
            cell.classList.add('today');
        }

        let dateObj = new Date(year, month, i);
        let dayIndex = dateObj.getDay();
        cell.innerHTML = `${i}`;

        calendarDates.appendChild(cell);
    }
}

updateClock();
setInterval(updateClock, 1000);


