class ProductsList {
  constructor(container = ".product-items") {
    this.container = container;
    this.goods = [];
    this.allProducts = []; //массив объектов
    this._getProducts().then((data) => {
      //data - объект js
      this.goods = [...data];
      this.render();
      // this.getSum();
    });
  }

  /*  _fetchProducts() {
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
  } */

  _getProducts() {
    return fetch(
      `https://raw.githubusercontent.com/pkurzykin/JavaScript_base/main/catalog.json`
    )
      .then((result) => result.json())
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObj = new ProductItem(product);
      block.insertAdjacentHTML("beforeend", productObj.render());
    }
  }
  getSum() {
    let sum = 0;
    for (let product of this.goods) {
      sum += product.price;
    }
    alert(sum);
  }
}

class ProductItem {
  constructor(product) {
    this.title = product.title;
    this.price = product.price;
    this.desc = product.desc;
    this.id = product.id;
    this.img = product.id;
  }

  render() {
    return `<div class="product" id="${this.id}">
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

class BasketGoods {
  constructor() {
    this.addGoods();
    this._initClickAddToCart();
    this.invisible();
  }
  addGoods() {}

  removeGoods() {}

  invisible() {
    document.querySelector(".btn-cart").addEventListener("click", () => {
      document.querySelector(".cart-block").classList.toggle("invisible");
    });
  }
  _initClickAddToCart() {
    document.querySelector(".product-items").addEventListener("click", (e) => {
      if (e.target.classList.contains("addtocart-overlay-btn")) {
        alert("test");
      }
    });
  }
}

class BasketGoodsItem {}

let list = new ProductsList();
let basket = new BasketGoods();
