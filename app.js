let toggle=document.getElementById('toggle');
let label_toggle=document.getElementById('label_toggle');
let imagen=document.getElementById('imagen');
let imagen2=document.getElementById('imagen2');
let imagen3=document.getElementById('imagen3');
let imagen4=document.getElementById('imagen4');
let imagen5=document.getElementById('imagen5');
let imagen6=document.getElementById('imagen6');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (prefersDarkScheme) {
    toggle.checked = true;
    document.body.classList.add('dark');
    label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    label_toggle.style.color = "yellow";
    imagen.src = 'Letra - b.png';
    imagen2.src = 'YouTube - b.png';
    imagen3.src = 'Instagram - b.png';
    imagen4.src = 'Twitter - b.png';
    imagen5.src = 'Soundcloud - b.png';
    imagen6.src = 'email - b.png';
} else {
    toggle.checked = false;
    document.body.classList.remove('dark');
    label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    label_toggle.style.color = "darkblue";
    imagen.src = 'Letra.png';
    imagen2.src = 'YouTube.png';
    imagen3.src = 'Instagram.png';
    imagen4.src = 'Twitter.png';
    imagen5.src = 'Soundcloud.png';
    imagen6.src = 'email.png';
}

toggle.addEventListener('change',(event)=>{
    let checked=event.target.checked;
    document.body.classList.toggle('dark');
    if (checked==true){
        label_toggle.innerHTML='<i class="fa-solid fa-sun"></i>';
        label_toggle.style.color="yellow";
        imagen.src = 'Letra - b.png';
        imagen2.src = 'YouTube - b.png';
        imagen3.src = 'Instagram - b.png';
        imagen4.src = 'Twitter - b.png';
        imagen5.src = 'Soundcloud - b.png';
        imagen6.src = 'email - b.png';
    }else{
        label_toggle.innerHTML='<i class="fa-solid fa-moon"></i>';
        label_toggle.style.color="darkblue";
        imagen.src = 'Letra.png';
        imagen2.src = 'YouTube.png';
        imagen3.src = 'Instagram.png';
        imagen4.src = 'Twitter.png';
        imagen5.src = 'Soundcloud.png';
        imagen6.src = 'email.png';
    }
})