let mainimg = document.querySelector(".main-images");
let input = document.querySelector("#search-input");
let cart = document.getElementById("cart");
let cartbody = document.getElementById("cartbody");
let value = input.value;
let image = [];
const addto = () => {
  // immage is get from getdata()
  image.forEach((img) => {
    let container = document.createElement("div");
    container.innerHTML = `<div class="box">
        <div class="container-image">
        <img class="cursor-pointer" src="${img.imageAddress}" alt="image">
        <div class="image-overlay">
                        <p>${img.author}</p>
                        <button class="save">Save</button>
                    </div>
        </div>
    </div>`;
    mainimg.appendChild(container);
    let saveButtons = container.querySelectorAll(".save");
    saveButtons.forEach((button) => {
      button.addEventListener("click", () => {
        let imageData = button.closest(".box").querySelector("img").getAttribute("src");
        console.log("Clicked image data:", imageData);
        addtocart(imageData);
      });
    });
  });
};
// for filter
let filterdata = (abc) => {
  let filter = image.filter((img) =>
    img.author.toLowerCase().includes(abc.toLowerCase())
  );
  filterconatier(filter);
};
// filter data container
let filterconatier = (filter) => {
  mainimg.innerHTML = "";
  filter.forEach((img) => {
    let container = document.createElement("div");
    container.innerHTML = `<div class="box">
            <img class="cursor-pointer" src="${img.imageAddress}" alt="image">
            <p>${img.author}</p>
            <button>Save</button>
        </div>`;
    mainimg.appendChild(container);
  });
};
// getting filter data
input.addEventListener("input", () => {
  let filtervalue = input.value.trim();
  if (filtervalue !== "") {
    filterdata(filtervalue);
  } else {
    mainimg.innerHTML = "";
    addto();
  }
});
// cart event
const Toggledisplay = () => {
  let cartbody = document.getElementById("cartbody");
  if (cartbody.style.display == "none") {
    cartbody.style.display = "block";
  } else {
    cartbody.style.display = "none";
  }
};
cart.addEventListener("click", Toggledisplay);
// add to cart
const addtocart = (imageData)=>{
    let cartimages =  document.createElement('img');
    cartimages.src= imageData
    cartbody.appendChild(cartimages)
}
// json data
const getData = () => {
  fetch("pinterest.json")
    .then((Response) => Response.json())
    .then((data) => {
      image = data;
      addto();
    });
  // .catch(console.error("something went wrong"));
};
getData();
