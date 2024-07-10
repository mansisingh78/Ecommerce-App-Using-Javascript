const container = document.getElementById("container");
const searchInput = document.getElementById("search");

//create an array to store product data
let product = [];
fetch("https://fakestoreapi.com/products/")
  .then((res) => res.json())
  .then((data) => {
    product = data;
    displayProduct(product); //call the function
  })

  .catch((err) => console.log(err));

function displayProduct(product) {
  container.innerHTML = ""; //clear the container before display product
  if (product.length === 0) {
    const noProduct = document.createElement("p");
    noProduct.textContent = "no product found";
    noProduct.style.color = "red";
    container.appendChild(noProduct);
  }
  product.forEach((item) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const imageElement = document.createElement("img");
    imageElement.src = item.image;
    imageElement.alt = item.title;
    productDiv.appendChild(imageElement);

    const titleElement = document.createElement("h2");
    // Split the title into words and take the first 5 words
    const truncatedTitle = item.title.split(" ").slice(0, 5).join(" ");
    titleElement.textContent = truncatedTitle;
    productDiv.appendChild(titleElement);

    const priceElement = document.createElement("p");
    const price = Math.floor(item.price) * 80;
    priceElement.textContent = `Price - ₹${price}`;
    productDiv.appendChild(priceElement);

    container.appendChild(productDiv);
  });
}

//event listner for search input
searchInput.addEventListener("input", (e) => {
  const inputText = e.target.value.toLowerCase();
  const filterProduct = product.filter((item) =>
    item.title.toLowerCase().includes(inputText)
  );
  displayProduct(filterProduct); //call the function for filterproduct
});
