// Address to Noroff API
const API_URL = "https://v2.api.noroff.dev/online-shop";

// Read the product id from the link (after ?id=)
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

//Gets the product from the API 
async function getProduct() {
    const container = document.querySelector("#product-details"); // find the right box //
    container.innerHTML = `<p class="loading">Laster produktet ...</p>`; //Shows loading text until the product is ready //
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const result = await response.json();
        const product = result.data;

        // Shows the old price too if the product is on sale
        let priceHTML = `<p class="price">${product.price} kr</p>`;
        if (product.discountedPrice < product.price) {
            priceHTML = `<p
            class="price">${product.discountedPrice} kr <span 
            class="old-price">${product.price} kr</span></p>`;  
        }
        // Shows the rating as stars (rounded to a whole number)
        const stars = Math.round(product.rating);
        const starsHTML = `<p
        class="rating">${"★".repeat(stars)}${"☆".repeat(5 - stars)} (${product.rating})</p>`;
        container.innerHTML = `
    <img src="${product.image.url}" alt="${product.title}">
    <div class="product-info">
        <h1>${product.title}</h1>
        ${starsHTML}
        ${priceHTML}
        <p>${product.description}</p>
    </div>
        `;
    } catch (error) {
        container.innerHTML = `<p class="error-text">Noe gikk galt. Vi klarte ikke å hente produktet. Prøv igjen senere.</p>`;
    }
}

getProduct();
