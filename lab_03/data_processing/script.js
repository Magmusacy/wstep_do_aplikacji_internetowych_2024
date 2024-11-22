let allProducts = [];
const filterProduct = document.getElementById("filter-phrase");
const sortProduct = document.getElementById("sort-data");
let sortOrder = "original";
let filterPhrase = "";

filterProduct.addEventListener("input", (event) => {
  filterPhrase = event.target.value;
  renderProducts(
    sortProducts(filterProducts(allProducts, filterPhrase), sortOrder)
  );
});

sortProduct.addEventListener("change", (event) => {
  sortOrder = event.target.value;
  const sortedProducts = sortProducts(allProducts, sortOrder);
  renderProducts(filterProducts(sortedProducts, filterPhrase));
});

const sortProducts = (products, order) => {
  const copyProducts = [...products];
  if (order === "original") {
    return copyProducts;
  } else if (order == "asc") {
    return copyProducts.sort((a, b) => {
      return a.title < b.title ? -1 : 1;
    });
  } else if (order == "desc") {
    return copyProducts.sort((a, b) => {
      return a.title > b.title ? -1 : 1;
    });
  }

  return copyProducts;
};

const filterProducts = (products, phrase) => {
  return products.filter((product) => {
    return product.title.toLowerCase().includes(phrase.toLowerCase());
  });
};

const renderProducts = (products) => {
  const table = document.getElementById("product-table-body");
  console.log(table);
  table.innerHTML = "";
  for (let product of products) {
    addProductToTable(product);
  }
};

const addProductToTable = (product) => {
  const table = document.getElementById("product-table-body");
  const row = table.insertRow();
  for (let key in product) {
    const cell = row.insertCell();
    if (key === "image") {
      const img = document.createElement("img");
      img.src = product[key];
      img.alt = product["title"];
      cell.appendChild(img);
      continue;
    } else {
      const text = document.createTextNode(product[key]);
      cell.appendChild(text);
    }
  }
};

const data = fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    const products = data.products.slice(0, 30);
    for (let product of products) {
      const filteredProduct = {
        title: product.title,
        description: product.description,
        image: product.images[0],
      };
      allProducts.push(filteredProduct);
      addProductToTable(filteredProduct);
    }
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });
