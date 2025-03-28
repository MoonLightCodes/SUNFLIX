const container = document.getElementById('container');
const selContainer = document.getElementById('selected-mve-container');
const closeSel = document.getElementById('close');

closeSel.addEventListener('click',()=>selContainer.style.display='none');
container.addEventListener('click',(e)=>{
    if(!e.target.closest('.card'))return;
    if(e.target.closest('.card').querySelector('.mve-title').textContent!=='Tummbaad') return;
    selContainer.style.display = 'flex';
    selContainer.querySelector('.selected-video').src = `https://knightbucket99.s3.eu-north-1.amazonaws.com/Tummbaad.mp4`;
    selContainer.querySelector('.selected-video').setAttribute('controls','');
    selContainer.querySelector('.selected-video').style.display=`block`;
});
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'j' || e.key === 'c')) ||
        (e.ctrlKey && e.key === 'u') || 
        (e.ctrlKey && e.key === 's') || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'U') || 
        (e.ctrlKey && e.key === 'S') || 
        (e.key === 'F12')  ) {
        e.preventDefault();
    }
});
