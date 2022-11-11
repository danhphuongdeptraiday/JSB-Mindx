// let array = [["Apple", 10], ["Melon", 30], ["Lemon", 50]];
// //                   0               1              2

// for(let i = 0; i < array.length; i++){
//   console.log("I have "+ array[i][0] + " and price is "+ array[i][1]);
// }

// let array = [4,5,6,10];

// for(let x in array){
//   console.log(array[x]);
// }

// console.log("")
// for(let x of array){
//   console.log(x);
// }

// var Husky = {
//   name: "Ngáo",
//   legs: 4,
//   friends: ["everything!"]
// }

// Husky.color = "brown";
// delete Husky.friends;
// console.log(Husky);

// let s = "";
// for(let i = 1; i < 21; i++){
//   s = s + i + " ";
//   console.log("s : "+ s);
// }
// console.log(s);

  // let n = Number(prompt("Enter n"));
  // let c = 1;
  // for(let i = 1; i <= n; i++){
  //   c = c * i;
  //   // console.log("Tại vòng lặp thứ "+ (i - a + 1) + " c = " + c);
  // }
  // console.log("Sum = " + c);

// if else là so sánh điều kiện
// == so sánh bằng
// != so sánh khác
// <= nhỏ hơn hoặc bằng
// >= lớn hơn hoặc bằng
// && điều kiện và 
// || điều kiện hoặc

let a = 1;
let b = 0;

let c = 18;

// if(c < 18) {
//   console.log("Còn nhỏ tuổi quá");
// }else if (c > 18){
//   console.log("Lớn quá");
// }else {
//   console.log("Đủ tuổi r");
// }


// if(s == "Vũ") {
//   console.log("Tên tôi là "+ s);
// } else if (s == "Linh"){
//   console.log("Tên tôi là "+ s);
// } else if (s == "Sy"){
//   console.log("Tên tôi là "+ s);
// } else {
//   console.log("Tên tôi là "+ s);
// } 

let s = "";
// switch(s) {
//   case "Vũ":
//     console.log("Vũ");
//     break;
//   case "Linh":
//     console.log("Linh");
//     break;
//   case "Sy":
//     console.log("Sy");
//     break;
//   case "Hưng":
//     console.log("Hưng");
//     break;
//   default:
//     console.log("Sai hết r");
// }

// for(let i = 0 ; i < 10; i++){
//   if(i == 5){
//     continue;// skip số 5
//     // break;// dừng vòng lặp nếu gặp i == 5
//     }
//   console.log(i);
// }

// let d = 10;
// if(d % 5 == 0){
//   console.log("Đúng r");
// }

// for(let i = 10; i <= 100; i++){
//   if(i % 2 == 0 || i % 3 == 0){
//     console.log(i);
//   }
// }

// Đảo ngược thứ tự của mảng sau ("Hải", "Quý", "Quyết", "Minh", "Sơn", "Tín","An","Duy")
let array = ["Hải", "Quý", "Quyết", "Minh", "Sơn", "Tín","An","Duy"];

let newArray = [];
for(let i = array.length - 1; i >= 0; i--){
  // console.log(array[i]);
  newArray.push(array[i]);
}
console.log(array);
console.log(newArray);















