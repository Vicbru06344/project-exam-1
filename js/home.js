// Address to the Noroff API
const API_URL = "https://v2.api.noroff.dev/online-shop";

//Gets the product from the API
async function getProducts() {
    const response = await fetch(API_URL);
    const result = await response.json();
    const products = result.data;

    for (const product of products) {
        console.log(product.title);
    }
}

getProducts();




