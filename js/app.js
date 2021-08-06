const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;
const main = document.querySelector('main');

if ( !search ) {
    message = `<strong>In Stock:</strong> ${inStock.join(', ')}`;
} else if ( inStock.includes(search.toLowerCase())){
    message = `Yes we have <span class="food">${search}</span> in stock, it is <span class="food">#${inStock.indexOf(search.toLowerCase() )+1}</span> in our list.`;
} else {
    message = `Sorry we do not have <span class="food">${search.toLowerCase()}</span> in Stock at the moment!`;
}

main.innerHTML = `<p>${message}</p>`;