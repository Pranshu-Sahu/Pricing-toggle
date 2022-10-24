const toggle=document.getElementById('toggle');
const monthly=document.querySelectorAll('.monthly');
const annually=document.querySelectorAll('.annually');
toggle.addEventListener('click',togglePricing);
function togglePricing(){
    monthly.forEach((e)=>e.classList.toggle('hidden'))
    annually.forEach((e)=>e.classList.toggle('hidden'))
}