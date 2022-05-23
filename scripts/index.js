//store the products array in localstorage as "products"

function StoreData(t, d, p, i) {
  this.type = t;
  this.desc = d;
  this.price = p;
  this.image = i;
}

// variables
let productsArr = JSON.parse(localStorage.getItem('products')) || [];
let addBtn = document.querySelector('#add_products');
let form = document.querySelector('#products');

// functions
function addProduct() {
  let t = form.type.value;
  let d = form.desc.value;
  let p = form.price.value;
  let i = form.image.value;
  let product = new StoreData(t, d, p, i);
  productsArr.push(product);
  localStorage.setItem('products', JSON.stringify(productsArr));

  form.desc.value = '' 
  form.price.value = '' 
  form.image.value = '' 
  form.type.value = '' 
}

function show_products(){
    window.location.href = "inventory.html"
}
