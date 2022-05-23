// variables
let productsArr = JSON.parse(localStorage.getItem('products')) || [];

display(productsArr);
// functions
function add_more_product() {
  window.location.href = 'index.html';
}

function display(data) {
  let parent = document.querySelector('#all_products');
  data.forEach(function (ele, i) {
    let card = document.createElement('div');
    let imgBox = document.createElement('div');
    let img = document.createElement('img');
    img.src = ele.image;
    imgBox.append(img);
    let type = document.createElement('p');
    type.innerText = ele.type;
    let desc = document.createElement('p');
    desc.innerText = ele.desc;
    let price = document.createElement('p');
    price.innerText = `₹ ${ele.price}`;
    let removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.id = 'remove_product';
    removeBtn.addEventListener('click', function () {
      remove(ele, i);
    });

    card.append(imgBox, type, desc, price, removeBtn);
    parent.append(card);
  });
}

// remove function
function remove(ele, i) {
  ``;
  let data = JSON.parse(localStorage.getItem('products')) || [];

  let newData = data.filter(function (ele, index) {
    //    if(i==index){
    //        let trash =
    //    }

    return i != index;
  });
  localStorage.setItem('products', JSON.stringify(newData));
  window.location.reload();
}
