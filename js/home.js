// Address to the Noroff API
const API_URL = "https://v2.api.noroff.dev/online-shop";

//Gets the product from the API
async function getProducts() {
    const response = await fetch(API_URL);
    const result = await response.json();
    const products = result.data;
    const grid = document.querySelector("#product-grid"); /* find the right box */

    for (const product of products.slice(0, 12)) { /* we only need 12 products */

        /* Put this in a box (grid) */ /* Connects to css design */
        grid.innerHTML += `
        <article class="product-card">      
        <img src="${product.image.url}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p class="price">${product.discountedPrice} kr</p>
        </article>
        `;

    }
}

getProducts();




