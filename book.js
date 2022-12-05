const main = document.querySelector(".main");

//Creating Header Element
let header = document.createElement("div");

let logo = document.createElement("h2");
logo.textContent = "BookShop";
header.appendChild(logo);
main.appendChild(header);


//Add image
let image = document.createElement("section");
image.classList.add("back-image");
image.innerHTML = '<img style="width: 1887px; " src="images/book2.jpg" alt="Book">';

main.appendChild(image);

//Creating welcome message
let welcome = document.createElement("h1");
welcome.classList.add("welcome");
welcome.textContent = "Welcome to Amazing Book Shop";
image.appendChild(welcome);
