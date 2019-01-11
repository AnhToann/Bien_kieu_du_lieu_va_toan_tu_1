var vatly ;
var hoahoc ;
var sinhhoc ;

var vatly = parseInt(prompt(" Diem vat ly"));
var hoahoc = parseInt(prompt("Diem hoa hoc"));
var sinhhoc = parseInt(prompt( "Diem sinh hoc"));

var medium = (vatly+hoahoc+sinhhoc) / 3 ;
document.write("Điểm trung bình của mày là:" + medium);