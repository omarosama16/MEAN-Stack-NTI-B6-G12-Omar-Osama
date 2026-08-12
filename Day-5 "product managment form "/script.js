var products =
JSON.parse(localStorage.getItem("products")) || [];
var currentProductId = null;

var productName =
document.getElementById("productName");
var productDesc =
document.getElementById("productDesc");
var productColor =
document.getElementById("productColor");
var outOfStock =
document.getElementById("StockAvalability");

var updateName =
document.getElementById("updateName");
var updateDesc =
document.getElementById("updateDesc");
var updateColor =
document.getElementById("updateColor");
var updateStock =
document.getElementById("updateStock");
var updateForm =
document.getElementById("updateForm");

var productsContainer =
document.getElementById("productsContainer");

function saveProducts() {
    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );
}

function displayProducts(list) {
    var box = "";
    for (var i = 0; i < list.length; i++) {
        var product = list[i];
        box += `
            <div class="product-row">
                <div>
                    ${product.name}
                </div>
                <div>
                    ${product.desc}
                </div>
                <div>
                    ${product.color}
                </div>
                <div>
                    ${
                        product.outOfStock
                        ? "Out of stock"
                        : "Available"
                    }
                </div>
                <div>
                    <button
                        class="edit-btn"
                        onclick="openUpdateForm(${product.id})">
                        Edit
                    </button>
                    <button
                        class="delete-btn"
                        onclick="deleteProduct(${product.id})">
                        Delete
                    </button>
                </div>
            </div>
        `;
    }

    productsContainer.innerHTML = box;

    document.getElementById("productCount").innerText =
        list.length +
        (list.length === 1 ? " product" : " products");

}

function addProduct() {
    if (
        productName.value.trim() === "" ||
        productDesc.value.trim() === "" ||
        productColor.value === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    var product = {
        id: Date.now(),
        name: productName.value.trim(),
        desc: productDesc.value.trim(),
        color: productColor.value,
        outOfStock: !outOfStock.checked
    };

    products.push(product);
    saveProducts();
    clearAddForm();
    displayProducts(products);
}

function deleteProduct(id) {
    var confirmDelete =
        confirm("Are u sure u want to delete?");
    if (!confirmDelete) {
        return;
    }
    products = products.filter(function(product) {
        return product.id !== id;
    });
    saveProducts();
    displayProducts(products);
}

function openUpdateForm(id) {
    var product = products.find(function(product) {
        return product.id === id;
    });
    if (!product) {
        return;
    }
    currentProductId = id;
    updateName.value =
        product.name;
    updateDesc.value =
        product.desc;
    updateColor.value =
        product.color;
    updateStock.checked =
        !product.outOfStock;
    updateForm.style.display = "block";
    updateForm.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

function saveUpdate() {
    if (currentProductId === null) {
        return;
    }
    if (
        updateName.value.trim() === "" ||
        updateDesc.value.trim() === "" ||
        updateColor.value === ""
    ) {

        alert("Please fill all fields");

        return;
    }
    var product = products.find(function(product) {
        return product.id === currentProductId;
    });
    if (!product) {
        return;
    }
    product.name =
        updateName.value.trim();
    product.desc =
        updateDesc.value.trim();
    product.color =
        updateColor.value;
    product.outOfStock =
        !updateStock.checked;
    saveProducts();
    closeUpdateForm();
    displayProducts(products);
}
function closeUpdateForm() {
    updateForm.style.display = "none";
    currentProductId = null;
    updateName.value = "";
    updateDesc.value = "";
    updateColor.value = "";
    updateStock.checked = false;
}
function clearAddForm() {
    productName.value = "";
    productDesc.value = "";
    productColor.value = "";
    outOfStock.checked = false;
}
function searchProducts() {
    var searchValue =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();
    var filteredProducts =
        products.filter(function(product) {
            return product.name
                .toLowerCase()
                .includes(searchValue);
        });
    displayProducts(filteredProducts);
}
displayProducts(products);