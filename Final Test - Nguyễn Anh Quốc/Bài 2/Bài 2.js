function numberOneTriangle() {

let a = parseFloat(document.getElementById("a").value);
let b = Number.isInteger(a);

if (b === true) {
    if ((a >= 1) && ( a <= 10)) {
        for(i=0; i<a; i++) {
    
            for(j=0; j<=i; j++) {
                document.writeln(" * ");
            }
            document.writeln("<br/>");
        }
    } else if ((a < 1) || ( a > 10))  {
        alert("Giá trị nhập vào chưa hợp lệ. Mời nhập lại")
    }
} else {
    alert("Giá trị nhập vào chưa hợp lệ. Mời nhập lại")

}
}
	