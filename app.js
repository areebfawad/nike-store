const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

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

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.sliderWrapper');
    const sliderItems = document.querySelectorAll('.sliderItem');
    let currentIndex = 0;

    function showSlide(index) {
        sliderWrapper.style.transform = `translateX(${-index * 100}vw)`;
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        showSlide(currentIndex);
    }, 3000); // Change slide every 3 seconds

    const buyButtons = document.querySelectorAll('.buyButton');
    const paymentModal = document.querySelector('.payment');
    const closeButton = document.querySelector('.close');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            paymentModal.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', () => {
        paymentModal.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const sliderWrapper = document.querySelector('.sliderWrapper');
    const sliderItems = document.querySelectorAll('.sliderItem');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        sliderWrapper.style.transition = 'none'; // Disable transition for filtering

        sliderItems.forEach(item => {
            const itemName = item.getAttribute('data-name').toLowerCase();
            if (itemName.includes(searchTerm)) {
                item.style.display = 'flex'; // Show matched items
            } else {
                item.style.display = 'none'; // Hide non-matched items
            }
        });

        sliderWrapper.style.transition = 'all 1.5s ease-in-out'; // Re-enable transition
    });
});
