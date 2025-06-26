AOS.init();

const birthdayDate = new Date ("May 23, 2026 16:00:00");
const birthdayTimeStamp = birthdayDate.getTime();

const countHours = setInterval(function() {
    const now = new Date();
    const currentTimeStamp = now.getTime();

    const distanceToBirthday = birthdayTimeStamp - currentTimeStamp;

    const dayInMs = 1000 * 60 * 60 * 24;
    const hourInMs = 1000 * 60 * 60;
    const minuteInMs = 1000 * 60;
    
    const daysToEvent = Math.floor(distanceToBirthday / dayInMs);
    const hoursToEvent = Math.floor((distanceToBirthday % dayInMs) / hourInMs);
    const minuteToEvent = Math.floor((distanceToBirthday % hourInMs) / minuteInMs);
    const secondsToEvent = Math.floor((distanceToBirthday % minuteInMs) / 1000);

    document.getElementById('counter').innerHTML =
    `${daysToEvent}d ${hoursToEvent}h ${minuteToEvent}m ${secondsToEvent}s`

    if (distanceToBirthday < 0) {
        clearInterval(countHours);
        document.getElementById('counter').innerHTML =
        `ACABOU :/`
    }
}, 1000);