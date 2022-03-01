const daysSinceDisplay = document.getElementById("days-since-visited");

let lastVisit = localStorage.getItem("lastVisit");

let thisVisit = Date.now();

let daysSince = Number((thisVisit - lastVisit) / 86400000);

daysSince = Math.round(daysSince);

daysSinceDisplay.textContent = daysSince;

localStorage.setItem("lastVisit", thisVisit);

