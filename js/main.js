var pName = document.getElementById("pName");
var pPrice = document.getElementById("pPrice");
var pCategory = document.getElementById("pCategory");
var pDesc = document.getElementById("pDesc");
var btn = document.getElementById("btn");
var pContainer = [];
var tbody = document.getElementById("tbody");
var prod = ``;
var currIndex = 0;

if (JSON.parse(localStorage.getItem("Products"))) {
  pContainer = JSON.parse(localStorage.getItem("Products"));
  display();
} else {
  pContainer = [];
}

btn.onclick = function () {
  if (btn.innerHTML == "Add Product") {
    addProduct();
  } else {
    update();
  }
};

function addProduct() {
  var product = {
    name: pName.value,
    price: pPrice.value,
    category: pCategory.value,
    desc: pDesc.value,
  };
  pContainer.push(product);
  localStorage.setItem("Products", JSON.stringify(pContainer));
  display();
}

function display() {
  var prod = ``;
  for (let i = 0; i < pContainer.length; i++) {
    prod += `
    <tr>
      <td>${i + 1}</td>
      <td>${pContainer[i].name}</td>
      <td>${pContainer[i].price}</td>
      <td>${pContainer[i].category}</td>
      <td>${pContainer[i].desc}</td>
      <td><button class="btn delete" onclick = del(${i})>Delete</button> </td>
      <td><button class="btn update" onclick = getData(${i})>Update</button> </td>
    </tr>
    `;
  }

  document.getElementById("tbody").innerHTML = prod;
}

function del(i) {
  pContainer.splice(i, 1);
  localStorage.setItem("Products", JSON.stringify(pContainer));
  display();
}

function getData(i) {
  pName.value = pContainer[i].name;
  pPrice.value = pContainer[i].price;
  pCategory.value = pContainer[i].category;
  pDesc.value = pContainer[i].desc;
  btn.innerHTML = "Update Product";
  currIndex = i;
}

function update() {
  var product = {
    name: pName.value,
    price: pPrice.value,
    category: pCategory.value,
    desc: pDesc.value,
  };
  pContainer[currIndex] = product;
  localStorage.setItem("Products", JSON.stringify(pContainer));
  display();
}
