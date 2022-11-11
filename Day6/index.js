// 1. 
// Function là 1 khối code được thiết kế để làm 1 nhiệm vụ j đó 
// => Function sẽ được thực thi nếu mình gọi nó.
// Function khi chưa có tham số
// Tạo 1 function = phương thức
// Trong cái phương thức này em có thể tính toán hoặc in ra 1 cái gì đó

// function hello() {
//     console.log("Hi");
// }

// hello();

//2. Function khi có tham số 

// function introduce(n){
//     console.log("My name is "+ n);
// }

// introduce("Phương");

//3. Return Function

// function count(a, b){
//     return a + b;
// }
// //3 + 5
// let a = count("My name is ", "Phương")
// console.log("c = "+ a);

//4. Array (Mảng): 1 cái array có thể lưu 
// được nhiều giá trị 1 lúc và vị trí của phần tử sẽ bắt đầu
// đếm từ index 0

// let array = ["Phuong","Danh", true];

// let c = array[2];

// console.log(c)

// let cars = [];

// cars[0] = "Toyota";
// cars[1] = "Volvo";
// cars[2] = "Mec";
// cars.push("G63"); // thêm vào 1 mảng 1 phẩn tử 
// cars.pop(); // xóa phần tử cuối của mảng

// console.log(cars)

//5. Object = đối tưởng (con người, cái xe, ...)
// - Property = Thuộc tính trong đối tượng: mô tả những j mà đối tương có
//   (Con người thì có tên có tuổi)
// - Method = function: Chức năng mà đối tượng đó có thể làm
//   (Con người thì có thẻ ăn, uống)

// let person = {
//     name: "Phương", 
//     age: 22, 
//     eat: function(){
//         // console.log("age: "+ this.age)
//         return "Phuongw";
//     },
//     drink: function(){
//         console.log("I'm drinking 7 Up");
//     }
// };
// console.log(person.eat());


// person.drink();


// console.log(person['eat'])

//6. for Loop: Vòng lặp
// let i = 0: cho i bắt đầu từ số mấy
// i < 10 là điều kiện của vòng lặp
// i++: số bước nhảy của biến i;
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }


// Bài tập
// Cach 1
// function vuong(){
//     let a = Number(prompt("Nhập cạnh của hình vuông"));
//     return Math.pow(a, 2);
// }

// function chuNhat(){
//     let a = Number(prompt("Nhập chiều rộng"));
//     let b = Number(prompt("Nhập chiều cao"));
//     return a * b;
// }

// function finalCount(){
//     return vuong() + chuNhat();
// }

// console.log(finalCount())

// let count = {
//     vuong: function(){
//         let a = Number(prompt("Nhập cạnh của hình vuông"));
//         return Math.pow(a, 2);
//     },
//     chuNhat: function(){
//         let a = Number(prompt("Nhập chiều rộng"));
//         let b = Number(prompt("Nhập chiều cao"));
//         return a * b;
//     },
//     finalCount: function(){
//         return this.vuong() + this.chuNhat();
//     }
// }
// console.log("Tong ="+ count.finalCount())

// let a = [];

// for(let i = 0; i < 4; i++){
//     a[i] = prompt("Enter number ");
// }

// for(let i = 10; i > 0; i-=2){
//     console.log(i);
// }

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// let i = 1;// 1 3 5 7 9
// while(i < 20){
//     console.log(i);
//     i+=2;// Buoc nhay
// }

// console.log("")

// for(let i = 1; i < 20; i = i + 2){
//     console.log(i)
// }

let arrays = [["Apple", 100], ["Lemon", 50], ["Tomato", 20]];

// for(let i = 0; i < arrays.length; i++){
//         console.log(arrays[i][0] + " have " + arrays[i][1]);
// }

let i = 0;
// while(i < arrays.length){
//     console.log(arrays[i][0] + " have " + arrays[i][1]);
//     i++;
// }

// for(let x in arrays){
//     console.log(arrays[x][0] + " have "+ arrays[x][1]);
// }

const person = {
    "firstName": "John",
    lastName: "Doe",
    "id": 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };

console.log(person.firstName);





















