// List of products
const products = [
    {
        name: "Herbal Tea",
        price: 500,
        image: "assets/images/herbal_tea.jpg",
        description: "A soothing herbal tea to relax your mind."
    },
    {
        name: "Protein Powder",
        price: 1500,
        image: "assets/images/protein_powder.jpg",
        description: "Boost your muscle recovery with our protein powder."
    }
];

// Add products dynamically to the webpage
const productList = document.getElementById('product-list');
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width:150px;">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Price: Rs. ${product.price}</p>
        <button onclick="buyNow('${product.name}', ${product.price})">Buy Now</button>
    `;
    productList.appendChild(productDiv);
});

// Buy Now function
function buyNow(productName, productPrice) {
    alert(`You selected ${productName}. Please proceed to payment of Rs. ${productPrice}`);
}
