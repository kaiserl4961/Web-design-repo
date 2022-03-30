function calculateDaysBetweenDates(begin, end) {
    var date1 = new Date(begin);
    var date2 = new Date(end);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
}


function getTime(date) {
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return time;
}

function getTime(timezone) {
    var date = new Date();
    var time = date.toLocaleString("en-US", { timeZone: timezone });
    return time;
}

//holy shit this is so much easier
//holy shit this is a mess
//wow i cant fathom that this worked