// js/game.js
let board = null;
let game = new Chess();
window.addEventListener('load', () => {
    board = Chessboard('board', {
        position: 'start',
        draggable: true
    });
    console.log('Board initialized');
});

function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}
