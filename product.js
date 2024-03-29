const BASE_URL = 'https://fakestoreapi.com';

document.addEventListener('DOMContentLoaded',
 async () => {
   const productId = localStorage.getItem('productId');
   const response = await fetch(`${BASE_URL}/products/${productId}`);
   const productData = await response.json();
   console.log(productData);
  
});
