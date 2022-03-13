const requestURL = 'data/data.json';
const cards = document.getElementById('directory-cards');
const list = document.getElementById('directory-list');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);

        const businesses = jsonObject['businesses'];

        businesses.forEach(displayBusinessCards);
        businesses.forEach(displayBusinessList);
    });

function displayBusinessCards(business) {
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');

    logo.setAttribute('src', business.logo);
    logo.setAttribute('alt', `Logo for ${business.name}`);
    logo.setAttribute('loading', 'lazy');

    address.textContent = business.address;
    phone.textContent = business.phone;
    website.textContent = business.website;
    website.setAttribute('href', '#');

    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    cards.appendChild(card);
}

function displayBusinessList(business) {
    let listItem = document.createElement('section');
    let name = document.createElement('p');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');

    name.textContent = business.name;
    address.textContent = business.address;
    phone.textContent = business.phone;
    website.textContent = business.website;
    website.setAttribute('href', '#');

    listItem.appendChild(name);
    listItem.appendChild(address);
    listItem.appendChild(phone);
    listItem.appendChild(website);

    list.appendChild(listItem);
}
