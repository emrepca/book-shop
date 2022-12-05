const main = document.querySelector(".main");

//Creating Header Element
let header = document.createElement("div");
header.setAttribute("class", "header");


let logo = document.createElement("h2");
logo.textContent = "BookShop";
logo.setAttribute("logo", "header");

header.appendChild(logo);
main.appendChild(header);


//Add image
let image = document.createElement("section");
image.setAttribute("class", "back-image");
image.innerHTML = '<img style="width: 1887px; " src="images/book2.jpg" alt="Book">';

main.appendChild(image);

//Creating welcome message
let welcome = document.createElement("h1");
welcome.setAttribute("class", "welcome");
welcome.textContent = "Welcome to Amazing Book Shop";

image.appendChild(welcome);

//Creating Catalog
const catalog=document.createElement("section");

const catalogContainer = document.createElement("div");
catalogContainer.setAttribute("class", "catalog");
catalogContainer.setAttribute("class", "catalog");

catalog.appendChild(catalogContainer);

//Create Catalog Title
const catalogTitle = document.createElement("h3");
catalogTitle.setAttribute("class", "catalogTitle");
catalogTitle.innerText="Book Catalog";
catalogContainer.appendChild(catalogTitle);




main.appendChild(catalog);
catalog.appendChild(catalogContainer);


