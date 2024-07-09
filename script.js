const container = document.getElementById("container");

fetch("https://fakestoreapi.com/products/")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
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
  })
  .catch((err) => console.log(err));
