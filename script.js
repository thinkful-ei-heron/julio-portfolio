'use strict';
function hamburger() {
    let x = document.getElementsByClassName('menu');
    console.log(x);
    if(x.style.display ==='none'){
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
$(hamburger);