const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');
const container = document.getElementById('container');
let mobileMode = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let noMessages = ["Are you sure?", "Think again", "Really?", "Say yes"];

yesBtn.addEventListener('click', () => {
    container.innerHTML = '<h1>УРА ПОБЕДА!</h1>';
});

if (mobileMode) {
    noBtn.addEventListener('click', () => {
        alert(noMessages[Math.floor(Math.random() * noMessages.length)]);
    });
} else {
    noBtn.addEventListener('mouseover', () => {
        let x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        let y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });
}

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);
