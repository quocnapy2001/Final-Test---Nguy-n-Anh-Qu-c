function primeSum() {

let a = parseFloat(document.getElementById("a").value);
let b = parseFloat(document.getElementById("b").value);
let sum =  0;

if (a < b) {
    for (let i = a; i <= b; i++) { 
        let k = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                k = 1;
            }
        }
        if (i > 1 && k == 0) {
            sum += i;
        }
    }
    result.innerHTML = "Tống các số nguyên tố từ " + a +" đến " + b +" là: " + sum;   
} else {
    alert("Giá trị nhập vào chưa hợp lệ. Xin mới nhập lại");
}
}
