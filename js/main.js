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
          <button class="piz__item-btn btns" onclick='addItem(${index.id})'>Add to Cart</button>
        </div>
      </div>`

  list.appendChild(li);
}

let elBtns = document.querySelectorAll('.btns');
let elList = document.querySelector('.piz__list-two');
let elSubtotal = document.querySelector('.subtotal');
let elTax = document.querySelector('.tax');
let elTotal = document.querySelector('.total');
let deletee = document.querySelector('.delete-item');

let sub = 0
let tax = 0
let tot = 0
let sanoq = 1;
let newArr = []

function addItem(id) {
  for (let i = 0; i < arr.length; i++) {
    if (id == arr[i].id) {
      newArr.push(arr[i]);
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    if (i == newArr.length - 1) {
      let li = document.createElement('li');
      li.className = "piz__item";
      li.innerHTML = `
      <div class="piz__item-box piz__item-anim d-flex">
        <img class="piz__img" src=${newArr[i].imgg} alt="pizza">
        <div class="piz__desc">
          <h3 class="piz__item-title">${newArr[i].name}</h3>
          <p class="piz__item-mony">$${newArr[i].mony}</p>
          <span class="score">${sanoq}</span>
          <span class="delete-item-minus" onclick='removeItem(${i})'>-</span>
          <span class="add-item-plus" onclick='addItem(${newArr[i].id})'>+</span>
          </div>
      </div>`;

      elList.appendChild(li);
      sanoq++;

      sub += eval(newArr[i].mony);
      elSubtotal.innerHTML = sub.toFixed(2) + '$';

      tax += eval(newArr[i].mony / 10);
      elTax.innerHTML = tax.toFixed(2) + '$';

      tot = eval(sub) + eval(tax);
      elTotal.innerHTML = eval(tot).toFixed(2) + '$'
    }
  }
}

function removeItem(index) {
  let newArrRemove = [];

  for (let i = 0; i < newArr.length; i++) {
    if (index != i) {
      newArrRemove.push(newArr[i]);
    }
  }

  newArr = newArrRemove;

  let subb = 0;
  let taxx = 0
  let tott = 0;

  elList.innerHTML = "";
  elTotal.innerHTML = 0 + '$';
  elTax.innerHTML = 0 + '$';
  elSubtotal.innerHTML = 0 + '$';


  for (let i = 0; i < newArr.length; i++) {
    let li = document.createElement('li');
    li.className = "piz__item";
    li.innerHTML = `
    <div class="piz__item-box d-flex">
      <img class="piz__img" src=${newArr[i].imgg} alt="pizza">
      <div class="piz__desc">
        <h3 class="piz__item-title">${newArr[i].name}</h3>
        <p class="piz__item-mony">$${newArr[i].mony}</p>
        <span class="score">1</span>
        <span class="delete-item-minus" onclick='removeItem(${i})'>-</span>
        <span class="add-item-plus" onclick='addItem(${i})'>+</span>
        </div>
    </div>`;

    subb += eval(newArr[i].mony);
    elSubtotal.innerHTML = subb.toFixed(2) + '$';

    taxx += eval(newArr[i].mony / 10);
    elTax.innerHTML = taxx.toFixed(2) + '$';

    tott = eval(subb) + eval(taxx);
    elTotal.innerHTML = eval(tott).toFixed(2) + '$'

    if (sanoq > 1) {
      sanoq--;
    }
    elList.appendChild(li);
  }
}

