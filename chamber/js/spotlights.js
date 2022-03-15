const requestURL = 'data/data.json';
const sections = document.getElementById('spotlights');
let spotlightID = 1;


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject);

        const businesses = jsonObject['businesses'];

        businesses.forEach(displaySpotlights);
    });

function displaySpotlights(business) {

    let membership = business.membership;
    let randInt = getRndInteger(0, 30);

    console.log(randInt);
    
    if (spotlightID < 4 && (membership === "Silver" || membership === "Gold")) {
        if (randInt % 2 === 0) {

            console.log(randInt);
            let section = document.createElement('section');
            let h3 = document.createElement('h3');
            let logo = document.createElement('img');
            let membershipLevel = document.createElement('p');
            let contact = document.createElement('p');

            section.setAttribute('id', `spotlight-${spotlightID}`);

            h3.textContent = business.name;

            logo.setAttribute('src', business.logo);
            logo.setAttribute('alt', `Logo for ${business.name}`);
            logo.setAttribute('loading', 'lazy');

            membershipLevel.textContent = `${membership} Member`;

            contact.setAttribute('class', 'spotlight-contact');
            contact.innerHTML = `${business.phone} <a href='#'>${business.website}</a>`;

            section.appendChild(h3);
            section.appendChild(logo);
            section.appendChild(membershipLevel);
            section.appendChild(contact);

            sections.appendChild(section);

            spotlightID += 1;
        }

    }
    
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }