function getproducts(){
    fetch('localhost:5000/products')
   .then((response) => response.json())
    .then((data) => console.log(data));
//  console.log(products[2])
}

getproducts()

function getfruits() {
    fetch('localhost:5000/products/fruits')
    .then((response)=> response.json())
    let fruitsCategory = products.find(product.category == 'fruits')
    return fruitsCategory
    .then ((fruitsCategory) => console.log(fruitsCategory))
}
getfruits()