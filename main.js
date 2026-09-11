const buttons=document.querySelectorAll('.filters button');
const cards=document.querySelectorAll('.project-card');
buttons.forEach(btn=>btn.addEventListener('click',()=>{
 buttons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');
 const f=btn.dataset.filter;
 cards.forEach(c=>c.classList.toggle('hidden',f!=='all'&&c.dataset.category!==f));
}));
document.querySelectorAll('.thumb img').forEach(img=>{
 img.addEventListener('error',()=>{img.style.display='none';img.parentElement.classList.add('image-error')});
});
