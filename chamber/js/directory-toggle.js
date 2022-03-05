// function toggleView() {

    
//     document.getElementById('directory-cards').classList.toggle('hidden');
//     document.getElementById('directory-list').classList.toggle('hidden');

// }

// const list = document.getElementById('directory-list');
// const cards = document.getElementById('directory-cards');
const gridBtn = document.getElementById('grid-btn');
const listBtn = document.getElementById('list-btn');


function displayList() {
    document.getElementById('directory-list').classList.remove('hidden');
    document.getElementById('directory-cards').classList.add('hidden');
    listBtn.classList.add('current');
    gridBtn.classList.remove('current');
}

function displayCards() {
    document.getElementById('directory-list').classList.add('hidden');
    document.getElementById('directory-cards').classList.remove('hidden');
    listBtn.classList.remove('current');
    gridBtn.classList.add('current');
}

gridBtn.onclick = displayCards;
listBtn.onclick = displayList;
