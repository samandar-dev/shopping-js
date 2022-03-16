
let arr = [
  {
    id: 1,
    name: 'Pepperoni',
    mony: '2.23',
    imgg: 'images/pepperoni.jpg',
  },
  {
    id: 2,
    name: 'Cheesy',
    mony: '5.99',
    imgg: 'images/pizz2.jpg',
  },
  {
    id: 3,
    name: 'Margarita',
    mony: '7.48',
    imgg: 'images/pepperoni.jpg',
  },
  {
    id: 4,
    name: 'Hawaiian',
    mony: '9.32',
    imgg: 'images/pizz4.jpg',
  },
]

let list = document.querySelector(".list");

for (let i = 0; i < arr.length; i++) {
  let index = arr[i];

  let li = document.createElement('li');
  li.className = "piz__item";

  li.innerHTML = `<div class="piz__item-box d-flex">
        <img class="piz__img" src=${index.imgg} alt="pizza">
        <div class="piz__desc">
          <h3 class="piz__item-title">${index.name}</h3>
          <p class="piz__item-mony">$${index.mony}</p>
          <button class="piz__item-btn btns">Add to Cart</button>
        </div>
      </div>`

  list.appendChild(li);
}

let elBtns = document.querySelectorAll('.btns');
let elList = document.querySelector('.piz__list-two');
let elSubtotal = document.querySelector('.subtotal');
let elTax = document.querySelector('.tax');
let elTotal = document.querySelector('.total');
let deletee = document.querySelector('delete-item');

let sub = 0
let tax = 0
let tot = 0

for (let j = 0; j < elBtns.length; j++) {
  elBtns[j].addEventListener('click', () => {
    let li = document.createElement('li');
    li.className = "piz__item";
    li.innerHTML = `<div class="piz__item-box piz__item-anim d-flex">
                <img class="piz__img" src=${arr[j].imgg} alt="pizza">
                <div class="piz__desc">
                  <h3 class="piz__item-title">${arr[j].name}</h3>
                  <p class="piz__item-mony">$${arr[j].mony}</p>
                  </div>
                  <span class="delete-item">-</span>
              </div>`;

    elList.appendChild(li);

    sub = arr[j].mony;
    elSubtotal.innerHTML = sub + '$';

    tax = arr[j].mony / 10;
    elTax.innerHTML = tax + '$';

    tot += eval(sub) + eval(tax);
    elTotal.innerHTML = eval(tot).toFixed(2) + '$'

    deletee.addEventListener('click', () => {
      li.remove();
    })
  })
}
