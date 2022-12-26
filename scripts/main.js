let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';



// myHeading.textContent  = multiply(3,1);


function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
// let iceCream = 'chocolate';

// if(iceCream==='chocolat'){
//     alert('我喜欢吃巧克力冰淇淋');
// }else{
//     alert('但是巧克力才是我的最爱呀...');
// }


let myImg = document.querySelector('img');
myImg.onclick = function () {
    let src = myImg.getAttribute('src');
    if (src === 'images/firefox-icon.jpeg') {
        myImg.setAttribute('src', 'images/taobao_icon.jpeg');
    } else {
        myImg.setAttribute('src', 'images/firefox-icon.jpeg');
    }

}


let myButton = document.querySelector('button');
myButton.onclick = function () {
    setUserName();
}


function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName) {
        setUserName
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName
    }

}