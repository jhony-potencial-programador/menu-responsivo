const btn = document.getElementById(`btn-menu`);
const nav = document.getElementById(`nav-menu`);

btn.addEventListener(`click`, function(){
    nav.classList.toggle(`aberto`);
});

nav.querySelectorAll(`a`).forEach(function(link){
    link.addEventListener(`click`, function(){
        nav.classList.remove(`aberto`);
    });
});