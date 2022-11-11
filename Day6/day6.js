// 1. Function: (Chức năng, phương thức)
// - Khái niệm: khối câu lệnh được thiết kế để làm 1 nhiệm vụ j đó
// - Để function được thực thi thì ta cần gọi nó

// 1.1, Function khi chưa có tham số.
// function sayHello() {
//     let a = 10;
//     let b = 20;
//     console.log(a + b);
// }

// sayHello();

// 1.2, Function khi có tham số đầu vào

// function sayHello(tenDem, tenChinh) {
//     console.log("Hello " + tenDem + " " + tenChinh);
// }

// let a = "Danh";
// let b = "Phuong";

// sayHello(a, b);

// 1.3, Function khi có retrun (return function);
// function sayHello() {
//     return 10 + 20;
// }

// sayHello();  
// console.log(sayHello());

// 2. Array(Mảng):
// - Khái niệm: 1 mảng có thể lưu được nhiều giá trị 1 lúc
// và mỗi phần từ trong mảng đều có 1 index(vị trí), và nó sẽ bắt đầu từ index = 0;

// let array = [];
// array[0] = "Tao";
// array[1] = "Dua";
// array[2] = "Oi";
// array[3] = true;

// array.push(10);// thêm vào cuối mảng 1 phần tử
// array.pop(); // Xóa đi phần tử cuối của mảng
// array.pop();
// console.log(array)

// 3. Object: Đối tượng (Con người, cái xe)
// - Property (Thuộc tính): Con người thì có tên, có tuổi, năm sinh, sở thích
// - Method = Function (Chức năng): Chức năng là có thể ăn, uống, ngủ, chơi đá bóng

// let person = {
//     name: "Phuong",
//     age: 22,
//     playFootball: function (){
//         console.log("I like football");
//     },
//     sleep: function() {
//         console.log("Sleep at 22pm");
//     },
//     MuoiToan: true
// }

// person.sleep();

// console.log(person.MuoiToan);

// 4. Vòng lặp (loop): for, while

// for(let i = 10; i > 0; i--){
//     console.log(i);
// }

// let i = 15;
// while(i >= 8){
//     console.log(i);
//     i-=2;// <=> i = i - 2
// }


// Bài 1
// function hcn(a, b){
//     return a * b;
// }

// function hthang(d1, d2, h){
//     return ((d1+d2)*h)*1/2;
// }

// let c1 = hcn(Number(prompt("Nhập chiều dài hình chữ nhật"))    ,     Number(prompt("Nhập chiều rộng hình chữ nhật")));
// console.log("Diện tích hình chữ nhật là: "+ c1);
// //c1 = S hình chữ nhật
// let c2 = hthang(Number(prompt("Nhập chiều đáy lớn")),   Number(prompt("Nhập chiều đáy bé")),     Number(prompt("Nhập chiều cao")));
// console.log("Diện tích hình thang: "+ c2);
// // c2 = S hình thang
// function count(c1, c2){
//     return c1*c1 + c2*c2;
// }
// // 
// console.log("Đáp số =" + count(c1, c2));

// Bài 2

let side = []; // mảng chứa 3 cạnh của tam giác 3,4,5
// side[0] = prompt("Enter")
// side[1] = prompt("Enter")
// side[3] = prompt("Enter")

for(let i = 0; i < 3; i++){
    side[i] = Number( prompt("Enter side ") );
}


let triangle = {
    sides: side, // [3,4,5]
    chuVi: function(){
        let c = 0;
        //Loop 1: c = c + side[0] <=> 0 = 0 + side[0](3) => c = 3
        //Loop 2: c = c + side[1] <=> 3 = 3 + side[1](4) => c = 7
        //Loop 3: c = c + side[2] <=> 7 = 7 + side[2](5) => c = 12
        for(let i = 0; i < this.sides.length; i++){
            c = c + this.sides[i];
        }
        // c = 12
        return c;
    }
}

console.log("Chu vi tam giac ="+ triangle.chuVi());



