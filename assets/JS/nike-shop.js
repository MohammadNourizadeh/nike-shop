const iconNum = document.getElementById('added-product-number');
const navIconDiv = document.getElementById('navbar-icon-div');

// products count
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

// cards adding btns
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

// cards removing btns
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

// products counter that can be seen on cards
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


// product specifications
const product = [{
    id: 1,
    img: './assets/images/main-img/products/nike-shoe1.png',
    pName: 'nike air max penny',
    cost: 149
},
{
    id: 2,
    img: './assets/images/main-img/products/nike-shoe2.png',
    pName: 'nike dunk',
    cost: 137
},
{
    id: 3,
    img: './assets/images/main-img/products/nike-shoe3.png',
    pName: 'nike air force 1 mid',
    cost: 100
},
{
    id: 4,
    img: './assets/images/main-img/products/nike-shoe4.png',
    pName: 'jordan retro',
    cost: 190
},
{
    id: 5,
    img: './assets/images/main-img/products/nike-shoe5.png',
    pName: 'nike air max 1',
    cost: 120
},
{
    id: 6,
    img: './assets/images/main-img/products/nike-shoe6.png',
    pName: 'nike dunk low retro',
    cost: 122
},
{
    id: 7,
    img: './assets/images/main-img/products/nike-shoe7.png',
    pName: 'nike full force low',
    cost: 120
},
{
    id: 8,
    img: './assets/images/main-img/products/nike-shoe8.png',
    pName: 'nike G.t jump',
    cost: 180
},
{
    id: 9,
    img: './assets/images/main-img/products/nike-shoe9.png',
    pName: 'nike freak 5',
    cost: 120
},
{
    id: 10,
    img: './assets/images/main-img/products/nike-shoe10.png',
    pName: 'nike KD16',
    cost: 132
},
{
    id: 11,
    img: './assets/images/main-img/products/nike-shoe11.png',
    pName: 'nike sabrina 1',
    cost: 110
},
{
    id: 12,
    img: './assets/images/main-img/products/nike-shoe12.png',
    pName: 'nike vomero 17',
    cost: 180
}]

const productRow = document.getElementById('product-row');
product.map(item => {
    const productCol = document.createElement('div');
    productCol.classList.add('col');

    productCol.innerHTML = `
        <div class="card h-100 shadow">
         <div class="product-img-div position-relative">
             <small id="counter1" class="position-absolute end-0 h5 d-none"></small>
             <img src=${item.img} class="card-img-top" alt="...">
         </div>
         <div class="card-body">
             <h5 class="card-title" id="card-title1">${item.pName}</h5>
             <button class="btn p-0" aria-expanded="false"><small class="text-body-secondary">2
                     colors</small></button>
             <div class="d-flex mt-2">
                 <i class="material-icons">attach_money</i>
                 <p class="card-text h5">${item.cost}</p>
             </div>
         </div>

         <div class="mb-2 w-100 d-flex justify-content-center">
             <button class="btn btn-light px-4 shadow rounded-5">add</button>
             <button class="btn btn-danger px-2 shadow rounded-5 d-none">remove</button>
         </div>
         <div class="card-footer">
             <small class="text-body-secondary">just now</small>
         </div>
        </div>
    `

    productRow.appendChild(productCol);

})
