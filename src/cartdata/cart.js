const cartData = JSON.parse(localStorage.getItem('products'))

console.log(cartData);

const container = document.getElementById('container')
let totalPrice = 0
let quantity = 0
for(var i = 0; i < cartData.length; i++){
    quantity++ 
    totalPrice += cartData[i].price
    const parentDiv = document.createElement('div')
    parentDiv.className = 'cart-items'
    const img = document.createElement('img')
    img.src = cartData[i].thumbnail
    const title = document.createElement('p')
    title.innerHTML = cartData[i].title
    const price = document.createElement('h3')
    price.innerHTML = cartData[i].price + '$'
    parentDiv.append(img)
    parentDiv.append(title)
    parentDiv.append(price)
    container.append(parentDiv)
}

const quantityElement = document.getElementById('quantity')
quantityElement.innerHTML = `Products Quantity <span>${quantity}</span>`

const totalPriceElement = document.getElementById('total-price')
totalPriceElement.innerHTML = `Subtotal <span>${totalPrice}$</span>`