const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');



fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        
        const prophets = jsonObject['prophets'];

        prophets.forEach(displayProphets);
    });

function displayProphets(prophet) {

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birthdateElement = document.createElement('p');
    let birthplaceElement = document.createElement('p');
    let portrait = document.createElement('img');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    birthdateElement.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplaceElement.textContent = `Place of Birth: ${prophet.birthplace}`;

    portrait.setAttribute('src', prophet.imageurl);

    if (prophet.order === 1) {
        portrait.setAttribute('alt', `Portrait of ${prophet.name}  ${prophet.lastname} - ${prophet.order}st President of the Church`);
    } else if (prophet.order === 2) {
        portrait.setAttribute('alt', `Portrait of ${prophet.name}  ${prophet.lastname} - ${prophet.order}nd President of the Church`);
    } else if (prophet.order === 3) {
        portrait.setAttribute('alt', `Portrait of ${prophet.name}  ${prophet.lastname} - ${prophet.order}rd President of the Church`);
    } else {
        portrait.setAttribute('alt', `Portrait of ${prophet.name}  ${prophet.lastname} - ${prophet.order}th President of the Church`);
    }
    
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(birthdateElement);
    card.appendChild(birthplaceElement);
    card.appendChild(portrait);

    cards.appendChild(card);
}

