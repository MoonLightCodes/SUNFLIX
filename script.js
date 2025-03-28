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