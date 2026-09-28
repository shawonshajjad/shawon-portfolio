const buttons=document.querySelectorAll('.filters button');
const cards=document.querySelectorAll('.project-card');
buttons.forEach(btn=>btn.addEventListener('click',()=>{
 buttons.forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});
 btn.classList.add('active');btn.setAttribute('aria-pressed','true');
 const f=btn.dataset.filter;
 cards.forEach(c=>{const hidden=f!=='all'&&c.dataset.category!==f;c.classList.toggle('hidden',hidden);c.setAttribute('aria-hidden',String(hidden));});
}));
document.querySelectorAll('.thumb img').forEach(img=>{
 img.addEventListener('error',()=>{img.hidden=true;img.parentElement.classList.add('image-error')});
});
