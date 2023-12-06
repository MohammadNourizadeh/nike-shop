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

const choosedProduct = [];
const productAdder = (item) => {
    choosedProduct.push(item);

    console.log(choosedProduct);
}


const productRow = document.getElementById('product-row');
product.map(item => {
    const productCol = document.createElement('div');
    productCol.classList.add('col');
    productCol.setAttribute('key', `${item.id}`)

    productCol.innerHTML = `
        <div class="card h-100 shadow">
         <div class="product-img-div position-relative">
             <small class="position-absolute end-0 h5 d-none"></small>
             <a href="./pages/product-info/product-info.html"><img src=${item.img} class="card-img-top" alt="..."></a>
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
         <button class="btn btn-light px-4 shadow rounded-5" onclick='${() => {productAdder(item)}}'>add</button>
             <button class="btn btn-danger px-2 shadow rounded-5 d-none" id="removing-btn">remove</button>
         </div>
         <div class="card-footer">
             <small class="text-body-secondary">just now</small>
         </div>
        </div>
    `

    productRow.appendChild(productCol);

})

