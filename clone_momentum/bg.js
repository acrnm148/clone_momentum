const body = document.querySelector("body");

const IMG_NUM = 3;

function paintImage(imgNum){
    const image = new Image();
    image.src= `images/${imgNum+1}.jpg`;  //"C:\\Users\\Owner\\Desktop\\vscode\\clone_momentum\\images\\"+JSON.parse(imgNum+1)+".jpg"
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUM);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();