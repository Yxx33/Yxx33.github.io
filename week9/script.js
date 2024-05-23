const myButton = document.querySelector("#my-button");
console.log(myButton);

const sideDrawer = document.querySelector("#side-drawer");
console.log(sideDrawer);

myButton.addEventListener("click", toggleSideDrawer);

let isOpen = false;

function toggleSideDrawer() {
    console.log("i am clicked");
    if (!isOpen) {
      sideDrawer.style.translate = "200px";
      isOpen = true;
    } else {
      sideDrawer.style.translate = "-200px";
      isOpen = false;
    }
  }