const addBtn = document.getElementById('add-btn');
const removeBtn = document.getElementById('remove-btn');
const productCheckoutDiv = document.getElementById('product-checkout-div');
const productCheckout = document.getElementById('product-checkout');
const productCount = document.getElementById('product-count');
const productCost = document.getElementById('product-cost');
let checkout = 0;
let count = 0;

addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    removeBtn.classList.remove('d-none');
    productCheckoutDiv.classList.remove('d-none');
    productCheckoutDiv.classList.add('d-flex');

    checkout += +productCost.innerText;
    productCheckout.innerText = checkout;

    count += 1;
    productCount.innerText = count;
})

removeBtn.addEventListener('click', (e) => {
    e.preventDefault();

    checkout -= +productCost.innerText;
    productCheckout.innerText = checkout;

    count -= 1;
    productCount.innerText = count;
    if (count < 1) {
        removeBtn.classList.add('d-none');
        productCheckoutDiv.classList.add('d-none');
        productCheckoutDiv.classList.remove('d-flex');
    }
})