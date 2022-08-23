fetch('http://localhost:5000/products')
.then(function(response) {
    return response.json();
})
.then(function(products) {
 console.log(products);

let productsList = document.getElementById('products')
products.forEach(i => {
    let list = document.createElement('li')
    list.innerText = `${i.name}`
    productsList.appendChild(list)
})
})
.catch(function(error){
 console.log('error',error);
});

fetch('http://localhost:5000/products')
.then(function(response) {
    return response.json();
})
.then(function(fruits) {
 console.log(fruits);

let fruitList = document.getElementById('fruList')
fruits.forEach(i => {
    let fruList = document.createElement('li')
    fruList.innerText = `${i.name}`
    fruitList.appendChild(fruList)
})
})
.catch(function(error){
 console.log('error',error);
});
fetch('http://localhost:5000/products')
.then(function(response) {
    return response.json();
})
.then(function(vegetables) {
 console.log(vegetables);

let vegetablesList = document.getElementById('vegList')
vegetables.forEach(i => {
    let vegList = document.createElement('li')
    vegList.innerText = `${i.name}`
    vegetablesList.appendChild(vegList)
})
})
.catch(function(error){
 console.log('error',error);
});
