//                  Bài 1
// let h = 5; // h: chiều cao của tam giác 
// // vòng for dòng thứ 3 là in ra từng dòng


// let tamGiacCan = "";
// for(let i = 1; i <= h; i++){
//     for(let k = h; k > i; k--){
//         // document.write("&nbsp;&nbsp;");
//         tamGiacCan = tamGiacCan + " ";
//     }
//     for(let j = 1; j <= i * 2 - 1; j++){
//         // document.write("1");
//         tamGiacCan = tamGiacCan + "1";
//     }
//     // document.write("<br>")
//     tamGiacCan = tamGiacCan + "\n";
// }
// console.log(tamGiacCan);

//              Bài 2
// let myArr = [7,9,7,0,7,8,37,123,456];
// for(let i = 0; i < myArr.length; i++){
//     if(myArr[i] % 2 == 0 || myArr[i] == 0){
//         console.log(myArr[i]);
//     }
// }

// let h1 = document.getElementById("heading");
// h1.innerHTML = "Danh Phuong Day";
// h1.className = "vidu";
// h1.style.backgroundColor = "red";
// h1.style.marginTop ="50px";
// h1.style.fontSize ="40px";
// console.log(h1);

// let t = document.getElementsByTagName("p");
// t[0].innerHTML = "sdkfbksd";
// console.log(t);

// let c = document.getElementsByClassName("line1")
// c[1].innerHTML = "New"
// console.log(c);

// let q = document.querySelectorAll("li");
// q[0].innerHTML = "Line 1";
// q[1].innerHTML = "Line 2";
// q[2].innerHTML = "Line 3";
// console.log(q);

// let img = document.createElement("img");
// img.src = "person.png";

// let h = document.createElement("p");
// h.innerHTML = "Thay phuong dzai"
// h.style.backgroundColor = "blue"

// document.body.appendChild(img);
// document.body.appendChild(h)

// let h1 = document.getElementById("heading");
// function doSomeThing() {
//     h1.innerHTML = "World"
//     h1.style.backgroundColor ="blue";

//     let img = document.createElement("img");
//     img.src = "person.png";
//     document.body.appendChild(img)
//     // console.log("Hello");
// }

// function getText() {
//     console.log(1 + 1);
// }

let button = document.querySelector("button");

// function clickMe() {
//     console.log("Hello World");
// }


button.addEventListener("click", function clickMe() {
    console.log("Hello World");
});