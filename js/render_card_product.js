const products = [
  {
    id: 1,
    title: "ELLERY X M'O CAPSULE_1",
    desc:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: 52,
  },
  {
    id: 2,
    title: "ELLERY X M'O CAPSULE_2",
    desc:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: 65,
  },
  {
    id: 3,
    title: "ELLERY X M'O CAPSULE_3",
    desc:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: 48,
  },
  {
    id: 4,
    title: "ELLERY X M'O CAPSULE_4",
    desc:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: 79,
  },
  {
    id: 5,
    title: "ELLERY X M'O CAPSULE_5",
    desc:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: 95,
  },
  {
    id: 6,
    title: "ELLERY X M'O CAPSULE_6",
    desc:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: 59,
  },
];

const renderProduct = (title, desc, price) => {
  return `<div class="product">
            <img src="img/products/prod_1.jpg" alt="image">
            <div class="overlay">
                <button class="addtocart-overlay-btn"> 
                    <img src="img/icon/shopping-cart-btn.svg" alt=" "> Add to cart
                </button>
            </div>
            <a href="product.html">
                <p class="product-title">${title}</p>
                <p class="product-desc">${desc}</p>
                <p class="product-price">&#36;${price}</p>
            </a>
            </div>`;
};

const renderPage = (list) => {
  const productsList = list.map((item) =>
    renderProduct(item.title, item.desc, item.price)
  );
  console.log(productsList);
  document.querySelector(".product-items").innerHTML = productsList;
};

renderPage(products);
