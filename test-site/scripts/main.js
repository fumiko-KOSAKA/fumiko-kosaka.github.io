const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/window.jpg") {
    myImage.setAttribute("src", "images/kotatsu.jpg");
  } else {
    myImage.setAttribute("src", "images/window.jpg");
  }
};

function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `${myName} さん、ねこはかわいいよね`;
    }
  } 
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `ねこはかわいいよ、${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
  
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
