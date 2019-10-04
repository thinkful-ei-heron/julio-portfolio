'use strict';
function hamburger() {
    let x = document.getElementsByClassName('menu');
    for(let i=0; i < x.length; i++){
        if(x[i].style.display ==='none'){
            x[i].style.display = 'block';
        } else {
            x[i].style.display = 'none';
        }
    };
}
function checkScreenWidth() {
    if($(window).width() >= 1000) {
        disableHamburger();
    }
}

function disableHamburger() {
    let listContainer = $('.list-container')[0];
    console.log(listContainer);
    listContainer.removeAttr(onclick);
}

$(checkScreenWidth);
