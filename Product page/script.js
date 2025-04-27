document.addEventListener('DOMContentLoaded', () => {
  const products = [
    "Smart Watch",
    "Wireless Headphones",
    "Gaming Laptop",
    "Bluetooth Speaker",
    "DSLR Camera",
    "Fitness Band",
    "Smartphone Pro",
    "4K Drone",
    "Wireless Mouse",
    "Mechanical Keyboard"
  ];

  const productGrid = document.getElementById('product-grid');

  products.forEach(productName => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <h2>${productName}</h2>
      <p>This is one of our best products! Buy it now!</p>
      <button class="buy-button">Buy Now</button>
      <button class="like-button">❤️ Like</button>
    `;

    productGrid.appendChild(card);
  });

  // Button functions
  document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', (e) => {
      const productName = e.target.parentElement.querySelector('h2').innerText;
      alert(`🛒 You bought ${productName}! Thank you!`);
    });
  });

  document.querySelectorAll('.like-button').forEach(button => {
    let likes = 0;
    button.addEventListener('click', () => {
      likes++;
      button.innerText = `❤️ ${likes} Likes`;
    });
  });
});
