// var productName = document.getElementById("productName");
// var productPrice = document.getElementById("productPrice");
// var productCategory = document.getElementById("productCategory");
// var productDescription = document.getElementById("productDescription");
// var productImage = document.getElementById("productImage");
// var searchInput = document.getElementById("searchInput");
// var index = 0;
// var productList = [];
// if (localStorage.getItem("productList") !== null) {
//   productList = JSON.parse(localStorage.getItem("productList"));
//   displayData();
// }

// function addProduct() {
//   if (
//     validationInputs(productName, "msgName") &&
//     validationInputs(productPrice, "msgPrice") &&
//     validationInputs(productCategory, "msgCategory") &&
//     validationInputs(productDescription, "msgdescription")
//   ) {
//     var product = {
//       name: productName.value,
//       price: productPrice.value,
//       category: productCategory.value,
//       description: productDescription.value,
//       image: "image/work-1.jpg",
//     };
//     productList.push(product);
//     localStorage.setItem("productList", JSON.stringify(productList));
//     displayData();
//     clear();

//     console.log(productList);
//   }
// }
// function clear() {
//   productName.value = null;
//   productPrice.value = null;
//   productCategory.value = null;
//   productDescription.value = null;
//   productImage.value = null;
// }
// function displayData() {
//   var cartona = "";
//   for (var i = 0; i < productList.length; i++) {
//     cartona += `
//                          <tr>
//               <td>${i + 1}</td>
//               <td>${productList[i].name}</td>
//               <td>${productList[i].price}</td>
//               <td>${productList[i].category}</td>
//               <td>${productList[i].description}</td>

//               <td>
//                 <img src="image/work-1.jpg" alt="iphone" class="w100px" />
//               </td>
//               <td>
//                 <button class="btn btn-danger btn-sm" onClick="deletProduct(${i})">Delete</button>
//                 <button onClick="updateProduct(${i})" class="btn btn-success btn-sm">Update</button>
//               </td>
//             </tr>

//         `;
//   }
//   document.getElementById("tableData").innerHTML = cartona;
// }

// function deletProduct(indexItem) {
//   productList.splice(indexItem, 1);
//   localStorage.setItem("productList", JSON.stringify(productList));
//   displayData();
// }

// function searchName() {
//   var term = searchInput.value.toLowerCase();
//   var cartona = "";

//   for (var i = 0; i < productList.length; i++) {
//     if (productList[i].name.toLowerCase().includes(term)) {
//       found = true;
//       cartona += `
//         <tr>
//           <td>${i + 1}</td>
//           <td>${productList[i].name}</td>
//           <td>${productList[i].price}</td>
//           <td>${productList[i].category}</td>
//           <td>${productList[i].description}</td>
//           <td>
//             <img src="image/work-1.jpg" alt="iphone" class="w100px" />
//           </td>
//           <td>
//             <button class="btn btn-danger btn-sm" onClick="deletProduct(${i})">Delete</button>
//             <button onClick="updateProduct(${i})" class="btn btn-success btn-sm">Update</button>
//           </td>
//         </tr>`;
//     }
//   }

//   document.getElementById("tableData").innerHTML = cartona;
// }

// function validationInputs(element, msgId) {
//   var text = element.value;
//   var regux = {
//     productName: /^[A-Z][a-z]{3,8}$/,
//     productPrice: /^[1-9]{2,5}$/,
//     productCategory: /^(TV|Mobile|Screens)$/,
//     productDescription: /^.{3,}$/,
//   };
//   var msg = document.getElementById(msgId);
//   if (regux[element.id].test(text)) {
//     element.classList.add("is-valid");
//     element.classList.remove("is-invalid");
//     msg.classList.add("d-none");
//     return true;
//   } else {
//     element.classList.add("is-invalid");
//     element.classList.remove("is-valid");
//     msg.classList.remove("d-none");
//     return false;
//   }
// }

// function updateProduct(indexItem) {
//   productName.value = productList[indexItem].name;
//   productPrice.value = productList[indexItem].price;
//   productCategory.value = productList[indexItem].category;
//   productDescription.value = productList[indexItem].description;

//   btnAdd.classList.add("d-none");
//   btnUpdate.classList.remove("d-none");
//   index = indexItem;
// }

// function updateData() {
//   var product = {
//     name: productName.value,
//     price: productPrice.value,
//     category: productCategory.value,
//     description: productDescription.value,
//     image: "image/work-1.jpg",
//   };
//   productList.splice(index, 1, product);
//   displayData();
//   clear();
//   localStorage.setItem("productList", JSON.stringify(productList));
//   btnAdd.classList.remove("d-none");
//   btnUpdate.classList.add("d-none");
// }

productName = document.getElementById("productName");
productPrice = document.getElementById("productPrice");
productCategory = document.getElementById("productCategory");
productDescription = document.getElementById("productDescription");
productImage = document.getElementById("productImage");
var btnAdd = document.getElementById("btnAdd");
var btnUpdate = document.getElementById("btnUpdate");
var indexElement = 0;
var productList = [];
if (localStorage.getItem("productsContainer") !== null) {
  productList = JSON.parse(localStorage.getItem("productsContainer"));
  displayData();
}
// productList = JSON.parse(localStorage.getItem('productsContainer'))

function AddProduct() {
  if (
    validationInputs(productName, "msgName") &&
    validationInputs(productPrice, "msgPrice") &&
    validationInputs(productCategory, "msgCategory") &&
    validationInputs(productDescription, "msgdescription")
  ) {
    var product = {
      name: productName.value,
      price: productPrice.value,
      category: productCategory.value,
      description: productDescription.value,
    };
    productList.push(product);
    displayData();
    clear();
    localStorage.setItem("productsContainer", JSON.stringify(productList));
  }
}
function displayData() {
  var cartona = "";
  for (var i = 0; i < productList.length; i++) {
    cartona += `
                <tr>
              <td>${i + 1}</td>
              <td>${productList[i].name}</td>
              <td>${productList[i].price}</td>
              <td>${productList[i].category}</td>
              <td>${productList[i].description}</td>
              
              <td>
                <img src="image/work-1.jpg" alt="iphone" class="w100px" />
              </td>
              <td>
                <button onclick="deleteIatem(${i})" class="btn btn-danger btn-sm">Delete</button>
                <button onclick="setFormUpdate(${i})" class="btn btn-success btn-sm">Update</button>
              </td>
            </tr>
    
    
    `;
  }
  document.getElementById("tableData").innerHTML = cartona;
}
function clear() {
  productName.value = null;
  productPrice.value = null;
  productCategory.value = null;
  productDescription.value = null;
}
function deleteIatem(indexItem) {
  productList.splice(indexItem, 1);
  displayData();
  localStorage.setItem("productsContainer", JSON.stringify(productList));
}

function validationInputs(element, msgId) {
  var text = element.value;
  var msg = document.getElementById(msgId);
  var regux = {
    productName: /^[A-Za-z\s]{2,50}$/,
    productPrice: /^\d+(\.\d{1,2})?$/,
    productCategory: /^(TV|Mobile|Screens)$/,
    productDescription: /^.{10,500}$/,
  };
  if (regux[element.id].test(text)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    msg.classList.add("d-none");
    return true;
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    msg.classList.remove("d-none");
    return false;
  }
}
function setFormUpdate(index) {
  productName.value = productList[index].name;
  productPrice.value = productList[index].price;
  productCategory.value = productList[index].category;
  productDescription.value = productList[index].description;
  btnAdd.classList.add("d-none");
  btnUpdate.classList.remove("d-none");
  indexElement = index;
}

function updateData() {
  var product = {
    name: productName.value,
    price: productPrice.value,
    category: productCategory.value,
    description: productDescription.value,
  };
  productList.splice(indexElement, 1, product);
  displayData();
  clear()
    localStorage.setItem("productList", JSON.stringify(productList));

  btnAdd.classList.remove("d-none");
  btnUpdate.classList.add("d-none");
  
}
