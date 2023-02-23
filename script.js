let cards = document.querySelectorAll('.card');
let lists = document.querySelectorAll('.list');

cards.forEach((card) => {
    registerEventOnCard(card);
})

function registerEventOnCard(card) {
    card.addEventListener('dragstart', (e) => {
        card.classList.add('dragging');
    })

    card.addEventListener('dragend', (e) => {
        card.classList.remove('dragging');
    })
}