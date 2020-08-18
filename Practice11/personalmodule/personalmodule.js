exports.helloFunction = function(systemUser) {
    let date = new Date();

    let currentHour = date.getHours();

    switch(true) {
        case (currentHour >= 23 && currentHour < 5):
            return `<p>Date of request: ${date}</p><p>Good night, ${systemUser}</p>`
            break;
        case (currentHour >= 5 && currentHour < 11):
            return `<p>Date of request: ${date}</p><p>Good morning, ${systemUser}</p>`
            break;
        case (currentHour >= 11 && currentHour < 17):
            return `<p>Date of request: ${date}</p><p>Good day, ${systemUser}</p>`
            break;
        case (currentHour >= 17 && currentHour < 23):
            return `<p>Date of request: ${date}</p><p>Good evening, ${systemUser}</p>`
            break;
        default:
            break;
    }

};