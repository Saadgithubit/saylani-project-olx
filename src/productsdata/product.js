getData()


function getData (){
    const productId = window.location.search.split('=')[1]
   
   
    fetch(`https://dummyjson.com/products/${productId}`)
    .then(res => res.json())
    .then(res => {
        const products = res


        const loader = document.getElementById('loader')
        loader.className = 'hide'

        const parentDiv = document.getElementById('products-details')
        const images = products.images
        parentDiv.innerHTML = `
        <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner images">
    <div class="carousel-item active">
      <img src="${images[0]}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${images[1]}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${images[2]}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${images[3]}" class="d-block w-100" alt="...">
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br>
        <h3><span class="span">Title: </span>${products.title}</h3>
        <h4><span class="span">Price: </span> ${products.price}</h4>
        <div class="cart">
    <div id="btn-div">
    <button id="cart-btn" onclick="objAdd()" class="btn btn-dark">Add to cart</button>
</div>
<div class="cart-count">
     <img src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_640.png" width="60px" onclick="goToCart()" id="cart-img" alt="">
     <p id="cart-count-num">${productsData.length}</p>
    </div>
</div>
        <div class="description">
        <p><span class="span">Description: </span> ${products.description}</p>
    </div>`
    })
}


const productsData = JSON.parse(localStorage.getItem('products')) || []
function objAdd(){

  const productId = window.location.search.split('=')[1]
   
   fetch(`https://dummyjson.com/products/${productId}`)
    .then(res => res.json())
    .then(res => {
        const products = res

 productsData.push(products)

 localStorage.setItem('products' , JSON.stringify(productsData))

 const countProducts = document.getElementById('cart-count-num')
 countProducts.innerHTML = productsData.length

 



    })
}
function goToCart (){
window.location.href = '../cartdata/cart.html'
}

