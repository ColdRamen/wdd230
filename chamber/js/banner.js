
let currentDate = new Date();

let day = currentDate.getDay();

const message = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
const bannerElement = document.getElementById("event-banner");

if (day === 1 || day === 2) {
    bannerElement.textContent = message;
    bannerElement.style.display = "block";
}