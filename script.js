const openBtn = document.getElementById('openLetter');
const letter = document.getElementById('letter');
const player = document.getElementById('player');

if (openBtn){
  openBtn.addEventListener('click', ()=>{
    letter.classList.remove('hidden');
    openBtn.disabled = true;
    openBtn.textContent = 'Terbuka ✓';
  });
}

const map = {
  about: 'https://youtu.be/tGv7CUutzqU?si=fozY-zrnIR09yBFE',
}
document.querySelectorAll('[data-song]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const key = btn.getAttribute('data-song');
    const src = map[key];
    player.innerHTML = src
      ? `<iframe width="100%" height="240" src="${src}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`
      : `<p>Link belum di-set.</p>`;
  });
});
