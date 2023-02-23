let cards = document.querySelectorAll('.card');
let lists = document.querySelectorAll('.list');

cards.forEach((card) => {
    registerEventOnCard(card);
})

lists.forEach((list) => {
    list.addEventListener('dragover', (e) => {
        e.preventDefault();
        let draggingCard = document.querySelector('.dragging');
        list.appendChild(draggingCard);
    })
})

function registerEventOnCard(card) {
    card.addEventListener('dragstart', (e) => {
        card.classList.add('dragging');
    })

    card.addEventListener('dragend', (e) => {
        card.classList.remove('dragging');
    })
}