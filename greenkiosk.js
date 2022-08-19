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
        name: 'Cabbages',
        category: 'vegetables'
    }]

let product = document.getElementById('products')
let li = document.createElement('li')
li.appendChild(document.createTextNode(products))
product.append(li)