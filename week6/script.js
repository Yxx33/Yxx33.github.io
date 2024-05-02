// const myHeading = document.querySelector("h1");
// console. log(myHeading);
// console. log(myHeading.textContent);
// myHeading.textContent="new heading";

// const myPara.forEach(colorMe);

// function colorMe(item)

// const myPara = document.querySelectorAll("p");
// console.log(myPara);
// const myColors = ["purple-box", "coral-box, "lime-box",];

// for (let i = 0; i < 4; i++){
//     myPara[i].classList
// }

const myImg = document.querySelector("#cat-image");
console.log(myImg);

const myButton = document.querySelector("#my-button");
console.log(myButton);

myButton.addEventListener("click", toggleMe);

function toggleMe(){
    const myImg = document.querySelector("#cat-image");
    // console.log(myImg);
    myImg.classList.toggle("round")
     const myDiv = document.querySelector(".outer");
     myDiv.classList.toggle("coarl-box");
}

