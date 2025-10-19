document.getElementById("shopNowBtn").addEventListener("click", () => {
  document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
});

const cartButtons = document.querySelectorAll(".addToCartBtn");
cartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
  });
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.reset();
});
