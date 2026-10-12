const flowers = document.querySelectorAll('.flower-card');
const message = document.getElementById('flower-message');
flowers.forEach((flower) => flower.addEventListener('click', () => {
  message.textContent = flower.dataset.message;
  flowers.forEach((item) => item.setAttribute('aria-pressed', 'false'));
  flower.setAttribute('aria-pressed', 'true');
}));

const opener = document.getElementById('open-letter');
const letter = document.getElementById('letter-card');
opener.addEventListener('click', () => {
  const opening = letter.hidden;
  letter.hidden = !opening;
  opener.setAttribute('aria-expanded', String(opening));
  opener.querySelector('.envelope-label').textContent = opening ? 'A letter, with all my heart' : 'Open when you want to feel my love';
  if (opening) letter.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

document.getElementById('heart-button').addEventListener('click', (event) => {
  document.getElementById('secret').textContent = 'No matter where life takes us, my heart knows its way to you.';
  event.currentTarget.innerHTML = 'I mean it <span>♥</span>';
  const layer = document.getElementById('sparkles');
  for (let count = 0; count < 16; count += 1) {
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle';
    sparkle.textContent = count % 3 === 0 ? '♥' : '✦';
    sparkle.style.left = `${event.clientX}px`;
    sparkle.style.top = `${event.clientY}px`;
    sparkle.style.setProperty('--x', `${(Math.random() - .5) * 240}px`);
    sparkle.style.setProperty('--y', `${(Math.random() - .5) * 180}px`);
    layer.appendChild(sparkle);
    sparkle.addEventListener('animationend', () => sparkle.remove());
  }
});

document.getElementById('wish-button').addEventListener('click', (event) => {
  document.getElementById('wish').textContent = 'May every road ahead lead us back to each other.';
  event.currentTarget.innerHTML = 'Wish received <span>♡</span>';
});
