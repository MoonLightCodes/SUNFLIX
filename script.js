document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('header img');
    logo.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        logo.style.transform = 'translateY(0)';
    }, 500);
});

const container = document.getElementById('container');
const selContainer = document.getElementById('selected-mve-container');
const closeSel = document.getElementById('close');

closeSel.addEventListener('click', () => selContainer.style.display = 'none');

container.addEventListener('click', (e) => {
    if (!e.target.closest('.card')) return;
    const title = e.target.closest('.card').querySelector('.mve-title').textContent;
    if (title !== 'Tummbaad') return;
    
    selContainer.style.display = 'flex';
    selContainer.querySelector('.selected-video').src = 
        'https://knightbucket99.s3.eu-north-1.amazonaws.com/Tummbaad.mp4';
    selContainer.querySelector('.selected-video').style.display = 'block';
    document.body.style.overflow = 'hidden';
});

selContainer.addEventListener('click', (e) => {
    if (e.target === selContainer) selContainer.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') selContainer.style.display = 'none';
});
