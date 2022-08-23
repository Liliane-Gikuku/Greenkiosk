let products = [
    {
        name: 'Mangoes',
        category: 'fruits'
    },
    {
        name: 'Apples',
        category: 'fruits'
    },
    {
        name: 'Bananas',
        category: 'fruits'
    },
    {
        name: 'Oranges',
        category: 'fruits'
    },
    {
        name: 'Grapes',
        category: 'fruits'
    },
    {
        name: 'Kales',
        category: 'vegetables'
    },
    {
        name: 'Onions',
        category: 'vegetables'
    },
    {
        name: 'Tomatoes',
        category: 'vegetables'
    },
    {
        name: 'http://localhost:5000/productsCabbages',
        category: 'vegetables'
    }];

    function getItems(category) {
        if (category) {
            let filteredProducts = products.filter(item => {
                return item.category === category;
            });
            return filteredProducts;
        }
        return products;
        }
        
        GreensKiosk = {
        getItems: getItems
        };
        
        module.exports = GreensKiosk;

// let product = document.getElementById('products')
// let li = document.createElement('li')
// li.appendChild(document.createTextNode(products))
// product.append(li)