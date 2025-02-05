// Evento slider de productos
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

//Productos
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 1990,
    colors: [
      {
        code: "black",
        img: "/images/F1_Black.png",
      },
      {
        code: "darkblue",
        img: "/images/F1_Black_Blue.png",
      },
    ],
  },
  
  {
    id: 1,
    title: "Air Jordan",
    price: 1499,
    colors: [
      {
        code: "lightgray",
        img: "/images/F1_Gray.png",
      },
      {
        code: "green",
        img: "./images/F1_Gray.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 1100,
    colors: [
      {
        code: "lightgray",
        img: "../assets/Images/sneaker-images/blazer.png",
      },
      {
        code: "green",
        img: "../assets/Images/sneaker-images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 1490,
    colors: [
      {
        code: "black",
        img: "../assets/Images/sneaker-images/crater.png",
      },
      {
        code: "lightgray",
        img: "../assets/Images/sneaker-images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 990,
    colors: [
      {
        code: "gray",
        img: "../assets/Images/sneaker-images/hippie.png",
      },
      {
        code: "black",
        img: "../assets/Images/sneaker-images/hippie2.png",
      },
    ],
  },
];

//Seleccion de producto
let choosenProduct = products[0];
//Elementos del producto
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

//Evento de cambio de producto
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //Cambio de color del menu
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //Cambio de producto
    choosenProduct = products[index];

    //Cambiar la informacion del producto
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //Asignacion de nuevos colores
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

//Evento de cambio de color y talla
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});
//Evento de cambio de color y talla
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

//Evento de ventana  de compra
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
//Evento de ventana  de compra al dar click
productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});
close.addEventListener("click", () => {
  payment.style.display = "none";
});