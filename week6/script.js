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

// const myImg = document.querySelector("#cat-image");
// console.log(myImg);

// const myButton = document.querySelector("#my-button");
// console.log(myButton);

// myButton.addEventListener("click", toggleMe);

// function toggleMe(){
//     const myImg = document.querySelector("#cat-image");
 // console.log(myImg);
//     myImg.classList.toggle("round")
//     const myDiv = document.querySelector("h1");
//     myTitle.textContent = myImg.dataset.catname;
    //  const myDiv = document.querySelector(".outer");
    //  myDiv.classList.toggle("coarl-box");
// }

// const myButton = document.querySelector("#my-button");
// console.log(myButton);

// myButton.addEventListener("click", chooseTopic);

// function chooseTopic()
// {
//     const myProjects = document.querySelectorAll("p");
//     myProjects.forEach(changeColor);
//     function changeColor(item)
//     {
//         if(item.dataset.topic==="web")
//         {
//             item.classList.add("purple-box");
//         }
//         else if (item.dataset.topic==="sound")
//         {
//             item.classList.add("coral-box");
//         }
//         else if (item.dataset.topic==="games")
//         {
//             item.classList.add("lime-box");
//         }
//     }
// }

// const myProjects = document.querySelectorAll("p");
// myProjects.forEach(changeColor);
// function changeColor(item)
// {
//     if(item.dataset.topic==="indian")
//     {
//         item.classList.add("purple-box");
//     }
//     else if (item.dataset.topic==="mexican")
//     {
//         item.classList.add("coral-box");
//     }
//     else if (item.dataset.topic==="Thai")
//     {
//         item.classList.add("lime-box");
//     }
// }

const courseName = "OART1013";
const myHeading = document.querySelector("h1");
console.log(myHeading);
myHeading.innerHTML =`new heading <span class="coral-box"> ${courseName} </span>`;

// myHeading.textContent = "new heading";

const myImg = document.querySelector("#cat-image");

myImg.addEventListener("mouseover",makeItRound);
myImg.addEventListener("mouseout",makeItSquare);

function makeItRound(){
    myImg.classList.add("add");
}

function makeItSquare(){
    myImg.classList.remove("round");
}