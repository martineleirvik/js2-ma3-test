import { baseUrl } from "./settings/api.js";

const productsUrl = baseUrl + "api/products";


(async function () {

    const productsContainer = document.querySelector(".container");

try {

    const response = await fetch(productsUrl);
    const json = await response.json();
    const result = json.data;
    console.log(result);


    console.log(json);

    json.forEach(function (product) {
        productsContainer.innerHTML += `<div class="products">
                                            <h2>${product.data.attributes.name}</h2>
                                            <p> Price: ${product.price}</p>
                                        </div>`;
    });

} catch(error) {
    console.log(error);
}
    

})();