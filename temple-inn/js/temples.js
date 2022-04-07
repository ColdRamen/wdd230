const requestURL = 'data/temples.json';
const cards = document.getElementById('temple-cards');


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const temples = jsonObject['temples'];
        temples.forEach(displayTempleCards);
        
    });

function displayTempleCards(temple) {
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let image = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let schedule = document.createElement('p');

    let servicesHeading = document.createElement('h3');
    let services = document.createElement('ul');

    let closuresHeading = document.createElement('h3');
    let closures = document.createElement('ul');

    let likeButton = document.createElement('button');
    let likeButtonEmpty = document.createElement('img');
    let likeButtonFilled = document.createElement('img');

    

    name.textContent = temple.name;

    image.setAttribute('src', temple.image);
    image.setAttribute('alt', `Image depicting the ${temple.name}`);
    image.setAttribute('loading', 'lazy');

    address.textContent = temple.address;
    phone.textContent = temple.phone;

    schedule.textContent = `Ordinance Schedule: ${temple.schedule}`;
    servicesHeading.textContent = 'Services';
    closuresHeading.textContent = 'Closures';

    temple.services.forEach((service) => {
        let serviceItem = document.createElement('li');

        serviceItem.textContent = service;
        services.appendChild(serviceItem);
    });

    temple.closures.forEach((closure) => {
        let closureItem = document.createElement('li');

        closureItem.textContent = closure;
        closures.appendChild(closureItem);
    });


    likeButtonEmpty.setAttribute('src', 'images/thumbs-up-empty.webp');
    likeButtonEmpty.setAttribute('alt', 'Empty thumbs up icon')
    likeButtonEmpty.setAttribute('class', 'like-button-img');

    likeButtonFilled.setAttribute('src', 'images/thumbs-up-filled.webp');
    likeButtonFilled.setAttribute('alt', 'Filled in thumbs up icon')
    likeButtonFilled.setAttribute('class', 'like-button-img');

    likeButton.setAttribute('class', 'like-button');
    likeButton.setAttribute('id', `like-button-${temple.id}`);

    
    likeButton.onclick = () => {
        if(localStorage.getItem(`${temple.id}`) === 'liked') {
            localStorage.setItem(`${temple.id}`, 'not liked');
        } else {
            localStorage.setItem(`${temple.id}`, 'liked');
        }
        location.reload();
    }

    if (localStorage.getItem(`${temple.id}`) === 'liked') {
        likeButton.appendChild(likeButtonFilled);
    } else {
        likeButton.appendChild(likeButtonEmpty);
    }   
    
    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(schedule);
    card.appendChild(servicesHeading);
    card.appendChild(services);
    card.appendChild(closuresHeading);
    card.appendChild(closures);
    card.appendChild(likeButton);
    

    cards.appendChild(card);
}

