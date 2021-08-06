
/**
 ************* BÀI 1 : Tính tiền lương ***************
 * 
 * Khối 1: inputs
 * total, name
 * 
 * Khối 2: các bước xử lý
 * B1: tìm thẻ html và lấy giá trị
 * B2: Xây dựng công thức tính tổng tiền lương
 * B3: Hiển thị lên UI
 * 
 * Khối 3: output
 * Tiền lương + tên NV
 * 
 */

//Khai báo hàm
function calcLUONG(){
    var total = document.getElementById("inputTotal").value;
    var name = document.getElementById("inputName").value;
    console.log(name);

    // Tính tổng tiền lương
    var totalLUONG = total  * 100000;
    console.log(totalLUONG);

    //Hiển thị lên UI
    document.getElementById("txtResult").innerHTML = "<br>"+name+"<br> TOTAL SALARY <br> <span style='vertical-align: super;'>$</span>"+totalLUONG;
   
}
// ************* hết - BÀI 1 : Tính tiền lương ***************

// *************  BÀI 2 : Tính GT trung bình ***************

// * Khối 1: inputs
//  * numbers
//  * 
//  * Khối 2: các bước xử lý
//  * B1: tìm thẻ html và lấy giá trị
//  * B2: Xây dựng công thức tính tổng của 5 số
//  * B3: Tính GTTB
//  * B4: Hiển thị lên UI
//  * 
//  * Khối 3: output
//  * GTTB
//  * 
//  */


function calcGTTB(){
    var num1 = document.getElementById("input1").value;
    console.log(num1);
    var num2 = document.getElementById("input2").value;
    console.log(num2);
    var num3 = document.getElementById("input3").value;
    console.log(num3);
    var num4 = document.getElementById("input4").value;
    console.log(num4);
    var num5 = document.getElementById("input5").value;
    console.log(num5);
    // Tính tổng 
    var totalNum = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5);
    console.log(totalNum);

    var Gttb = totalNum / 5;
    console.log(Gttb);

    //Hiển thị lên UI
    document.getElementById("txtResultGTTB").innerHTML = "<br>Giá trị trung bình <br>"+Gttb;
   
}

// *************  hết - BÀI 2 : Tính GT trung bình ***************


// ************* BÀI 3 : Quy đổi USD sang VND ***************
// * 
// * Khối 1: inputs
// * Số tiền USD
// * 
// * Khối 2: các bước xử lý
// * B1: tìm thẻ html và lấy giá trị
// * B2: Xây dựng công thức tính số tiền quy ra VND
// * B3: Hiển thị lên UI
// * 
// * Khối 3: output
// * số tiền quy ra VND
// * 
// */

//Khai báo hàm
function calcQuyDoi(){
   var sotien = document.getElementById("inputUSD").value;
   console.log(sotien);

   // Tính ra số tiền VND
   var QuyDoi = sotien  * 23500;
   console.log(QuyDoi);

   //Hiển thị lên UI
   document.getElementById("txtResultQD").innerHTML = "<br> Số tiền quy ra VND <br> <span style='vertical-align: super;'>$</span>"+QuyDoi;
  
}
// ************* hết - BÀI 3 : Quy đổi USD sang VND***************


// *************  BÀI 4 : Tính diện tích và chu vi ***************


function calcDTCV(){
var ChieuDai = document.getElementById("inputChieuDai").value;
console.log(ChieuDai);
var ChieuRong = document.getElementById("inputChieuRong").value;
console.log(ChieuRong);

// Tính diện tích
var DienTich = parseInt(ChieuDai) * parseInt(ChieuRong);
console.log(DienTich);

var ChuVi = parseInt(ChieuDai) + parseInt(ChieuDai) + parseInt(ChieuRong) + parseInt(ChieuRong);
console.log(ChuVi);


//Hiển thị lên UI
document.getElementById("txtResultDTCV").innerHTML = "<br>Diện Tích<br>"+DienTich+"<br> Chu Vi <br>"+ChuVi;

}

// *************  BÀI 5 : Tính diện tích và chu vi ***************

// * Khối 1: inputs
// * Số có 2 ký số
// * 
// * Khối 2: các bước xử lý
// * B1: tìm thẻ html và lấy giá trị
// * B2 : tách số để lấy từng ký số
// * B2: Xây dựng công thức tính tổng 2 ký số
// * B3: Hiển thị lên UI
// * 
// * Khối 3: output
// * số tổng 2 ký số
// * 
// */

//Khai báo hàm
function calcKS(){
    var numKS = document.getElementById("inputKS").value;
    console.log(numKS);

ten = Math.floor(numKS%100/10);
console.log(ten);

unit = numKS%100%10;
console.log(unit);

//Tính tổng
var sum = ten + unit;
console.log(sum);

//Hiển thị lên UI
document.getElementById("txtResultKS").innerHTML = "<br> Tổng hai ký số <br>"+sum;

}