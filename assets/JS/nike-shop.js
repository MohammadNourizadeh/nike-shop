const iconNum = document.getElementById('added-product-number');
const navIconDiv = document.getElementById('navbar-icon-div');

let totalNum = 0;
let shoe1 = 0;
let shoe2 = 0;
let shoe3 = 0;
let shoe4 = 0;
let shoe5 = 0;
let shoe6 = 0;
let shoe7 = 0;
let shoe8 = 0;
let shoe9 = 0;
let shoe10 = 0;
let shoe11 = 0;
let shoe12 = 0;

const addBtn1 = document.getElementById('product-add-btn1');
const addBtn2 = document.getElementById('product-add-btn2');
const addBtn3 = document.getElementById('product-add-btn3');
const addBtn4 = document.getElementById('product-add-btn4');
const addBtn5 = document.getElementById('product-add-btn5');
const addBtn6 = document.getElementById('product-add-btn6');
const addBtn7 = document.getElementById('product-add-btn7');
const addBtn8 = document.getElementById('product-add-btn8');
const addBtn9 = document.getElementById('product-add-btn9');
const addBtn10 = document.getElementById('product-add-btn10');
const addBtn11 = document.getElementById('product-add-btn11');
const addBtn12 = document.getElementById('product-add-btn12');

const removeBtn1 = document.getElementById('product-remove-btn1');
const removeBtn2 = document.getElementById('product-remove-btn2');
const removeBtn3 = document.getElementById('product-remove-btn3');
const removeBtn4 = document.getElementById('product-remove-btn4');
const removeBtn5 = document.getElementById('product-remove-btn5');
const removeBtn6 = document.getElementById('product-remove-btn6');
const removeBtn7 = document.getElementById('product-remove-btn7');
const removeBtn8 = document.getElementById('product-remove-btn8');
const removeBtn9 = document.getElementById('product-remove-btn9');
const removeBtn10 = document.getElementById('product-remove-btn10');
const removeBtn11 = document.getElementById('product-remove-btn11');
const removeBtn12 = document.getElementById('product-remove-btn12');

const counter1 = document.getElementById('counter1');
const counter2 = document.getElementById('counter2');
const counter3 = document.getElementById('counter3');
const counter4 = document.getElementById('counter4');
const counter5 = document.getElementById('counter5');
const counter6 = document.getElementById('counter6');
const counter7 = document.getElementById('counter7');
const counter8 = document.getElementById('counter8');
const counter9 = document.getElementById('counter9');
const counter10 = document.getElementById('counter10');
const counter11 = document.getElementById('counter11');
const counter12 = document.getElementById('counter12');


// adding btns
addBtn1.addEventListener('click', () => {
    navIconDiv.classList.remove('d-none');
    removeBtn1.classList.remove('d-none');
    counter1.classList.remove('d-none');

    totalNum += 1;
    iconNum.innerText = totalNum;
    shoe1 += 1;
    counter1.innerText = shoe1;
});

addBtn2.addEventListener('click', () => {
    navIconDiv.classList.remove('d-none');
    removeBtn2.classList.remove('d-none');
    counter2.classList.remove('d-none');

    totalNum += 1;
    iconNum.innerText = totalNum;
    shoe2 += 1;
    counter2.innerText = shoe2;
});

addBtn3.addEventListener('click', () => {
    navIconDiv.classList.remove('d-none');
    removeBtn3.classList.remove('d-none');
    counter3.classList.remove('d-none');

    totalNum += 1;
    iconNum.innerText = totalNum;
    shoe3 += 1;
    counter3.innerText = shoe3;
});

addBtn4.addEventListener('click', () => {
    navIconDiv.classList.remove('d-none');
    removeBtn4.classList.remove('d-none');
    counter4.classList.remove('d-none');

    totalNum += 1;
    iconNum.innerText = totalNum;
    shoe4 += 1;
    counter4.innerText = shoe4;
});

addBtn5.addEventListener('click', () => {
    navIconDiv.classList.remove('d-none');
    removeBtn5.classList.remove('d-none');
    counter5.classList.remove('d-none');

    totalNum += 1;
    iconNum.innerText = totalNum;
    shoe5 += 1;
    counter5.innerText = shoe5;
});

addBtn6.addEventListener('click', () => {
    navIconDiv.classList.remove('d-none');
    removeBtn6.classList.remove('d-none');
    counter6.classList.remove('d-none');

    totalNum += 1;
    iconNum.innerText = totalNum;
    shoe6 += 1;
    counter6.innerText = shoe6;
});

addBtn7.addEventListener('click', () => {
    navIconDiv.classList.remove('d-none');
    removeBtn7.classList.remove('d-none');
    counter7.classList.remove('d-none');

    totalNum += 1;
    iconNum.innerText = totalNum;
    shoe7 += 1;
    counter7.innerText = shoe7;
});

addBtn8.addEventListener('click', () => {
    navIconDiv.classList.remove('d-none');
    removeBtn8.classList.remove('d-none');
    counter8.classList.remove('d-none');

    totalNum += 1;
    iconNum.innerText = totalNum;
    shoe8 += 1;
    counter8.innerText = shoe8;
});

addBtn9.addEventListener('click', () => {
    navIconDiv.classList.remove('d-none');
    removeBtn9.classList.remove('d-none');
    counter9.classList.remove('d-none');

    totalNum += 1;
    iconNum.innerText = totalNum;
    shoe9 += 1;
    counter9.innerText = shoe9;
});

addBtn10.addEventListener('click', () => {
    navIconDiv.classList.remove('d-none');
    removeBtn10.classList.remove('d-none');
    counter10.classList.remove('d-none');

    totalNum += 1;
    iconNum.innerText = totalNum;
    shoe10 += 1;
    counter10.innerText = shoe10;
});

addBtn11.addEventListener('click', () => {
    navIconDiv.classList.remove('d-none');
    removeBtn11.classList.remove('d-none');
    counter11.classList.remove('d-none');

    totalNum += 1;
    iconNum.innerText = totalNum;
    shoe11 += 1;
    counter11.innerText = shoe11;
});

addBtn12.addEventListener('click', () => {
    navIconDiv.classList.remove('d-none');
    removeBtn12.classList.remove('d-none');
    counter12.classList.remove('d-none');

    totalNum += 1;
    iconNum.innerText = totalNum;
    shoe12 += 1;
    counter12.innerText = shoe12;
});


// remove btns
removeBtn1.addEventListener('click', () => {
    shoe1 -= 1;
    totalNum -= 1;
    iconNum.innerText = totalNum;
    counter1.innerText = shoe1;

    if (shoe1 === 0) {
        removeBtn1.classList.add('d-none');
        counter1.classList.add('d-none');
    }

    if (totalNum === 0) {
        navIconDiv.classList.add('d-none')
    }
})

removeBtn2.addEventListener('click', () => {
    shoe2 -= 1;
    totalNum -= 1;
    iconNum.innerText = totalNum;
    counter2.innerText = shoe2;

    if (shoe2 === 0) {
        removeBtn2.classList.add('d-none');
        counter2.classList.add('d-none');
    }

    if (totalNum === 0) {
        navIconDiv.classList.add('d-none')
    }
})

removeBtn3.addEventListener('click', () => {
    shoe3 -= 1;
    totalNum -= 1;
    iconNum.innerText = totalNum;
    counter3.innerText = shoe3;

    if (shoe3 === 0) {
        removeBtn3.classList.add('d-none');
        counter3.classList.add('d-none');
    }

    if (totalNum === 0) {
        navIconDiv.classList.add('d-none')
    }
})

removeBtn4.addEventListener('click', () => {
    shoe4 -= 1;
    totalNum -= 1;
    iconNum.innerText = totalNum;
    counter4.innerText = shoe4;

    if (shoe4 === 0) {
        removeBtn4.classList.add('d-none');
        counter4.classList.add('d-none');
    }

    if (totalNum === 0) {
        navIconDiv.classList.add('d-none')
    }
})

removeBtn5.addEventListener('click', () => {
    shoe5 -= 1;
    totalNum -= 1;
    iconNum.innerText = totalNum;
    counter5.innerText = shoe5;

    if (shoe5 === 0) {
        removeBtn5.classList.add('d-none');
        counter5.classList.add('d-none');
    }

    if (totalNum === 0) {
        navIconDiv.classList.add('d-none')
    }
})

removeBtn6.addEventListener('click', () => {
    shoe6 -= 1;
    totalNum -= 1;
    iconNum.innerText = totalNum;
    counter6.innerText = shoe6;

    if (shoe6 === 0) {
        removeBtn6.classList.add('d-none');
        counter6.classList.add('d-none');
    }

    if (totalNum === 0) {
        navIconDiv.classList.add('d-none')
    }
})

removeBtn7.addEventListener('click', () => {
    shoe7 -= 1;
    totalNum -= 1;
    iconNum.innerText = totalNum;
    counter7.innerText = shoe7;

    if (shoe7 === 0) {
        removeBtn7.classList.add('d-none');
        counter7.classList.add('d-none');
    }

    if (totalNum === 0) {
        navIconDiv.classList.add('d-none')
    }
})

removeBtn8.addEventListener('click', () => {
    shoe8 -= 1;
    totalNum -= 1;
    iconNum.innerText = totalNum;
    counter8.innerText = shoe8;

    if (shoe8 === 0) {
        removeBtn8.classList.add('d-none');
        counter8.classList.add('d-none');
    }

    if (totalNum === 0) {
        navIconDiv.classList.add('d-none')
    }
})

removeBtn9.addEventListener('click', () => {
    shoe9 -= 1;
    totalNum -= 1;
    iconNum.innerText = totalNum;
    counter9.innerText = shoe9;

    if (shoe9 === 0) {
        removeBtn9.classList.add('d-none');
        counter9.classList.add('d-none');
    }

    if (totalNum === 0) {
        navIconDiv.classList.add('d-none')
    }
})

removeBtn10.addEventListener('click', () => {
    shoe10 -= 1;
    totalNum -= 1;
    iconNum.innerText = totalNum;
    counter10.innerText = shoe10;

    if (shoe10 === 0) {
        removeBtn10.classList.add('d-none');
        counter10.classList.add('d-none');
    }

    if (totalNum === 0) {
        navIconDiv.classList.add('d-none')
    }
})

removeBtn11.addEventListener('click', () => {
    shoe11 -= 1;
    totalNum -= 1;
    iconNum.innerText = totalNum;
    counter11.innerText = shoe11;

    if (shoe11 === 0) {
        removeBtn11.classList.add('d-none');
        counter11.classList.add('d-none');
    }

    if (totalNum === 0) {
        navIconDiv.classList.add('d-none')
    }
})

removeBtn12.addEventListener('click', () => {
    shoe12 -= 1;
    totalNum -= 1;
    iconNum.innerText = totalNum;
    counter12.innerText = shoe12;

    if (shoe12 === 0) {
        removeBtn12.classList.add('d-none');
        counter12.classList.add('d-none');
    }

    if (totalNum === 0) {
        navIconDiv.classList.add('d-none')
    }
})
