function getproducts(){
    fetch('localhost:5000/products')
    .then((response) => response.json())
    .then((data) => console.log(data));
//  console.log(products[2])
}
getproducts()

function getfruits(){
    fetch('localhost:5000/fruList')
    .then((response) => response.json())
    .then((data) => console.log(data));
//  console.log(products[2])
}
getfruits()