const profileButton = document.querySelector("#profile-button");
console.log(profileButton);

const profileMenu = document.querySelector("#profile-content");
console.log(profileMenu);

profileButton.addEventListener("click", togglemenu);

function togglemenu(){
    profileMenu.classList.toggle("show");
}