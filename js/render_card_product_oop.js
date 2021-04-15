class ProductsList {
  constructor(container = ".product-items") {
    this.container = container;
    this.goods = [];
    this._fetchProducts();
  }

  _fetchProducts() {
    this.goods = [
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
  }
  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObj = new ProductItem(product);
      block.insertAdjacentHTML("beforeend", productObj.render());
      //            block.innerHTML += productObj.render();
    }
  }
}

class ProductItem {
  constructor(product) {
    this.title = product.title;
    this.price = product.price;
    this.desc = product.desc;
    // this.id = product.id;
    this.img = product.id;
  }

  render() {
    return `<div class="product">
    <img src="img/products/prod_${this.img}.jpg" alt="image">
    <div class="overlay">
        <button class="addtocart-overlay-btn"> 
            <img src="img/icon/shopping-cart-btn.svg" alt=" "> Add to cart
        </button>
    </div>
    <a href="product.html">
        <p class="product-title">${this.title}</p>
        <p class="product-desc">${this.desc}</p>
        <p class="product-price">&#36;${this.price}</p>
    </a>
    </div>`;
  }
}

let list = new ProductsList();
list.render();
