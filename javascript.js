function isLeapYear(year) {
    let divisibleFor4 = year %4 == 0;
    let divisibleFor100 = year %100 == 0;
    let divisibleFor400 = year %400 == 0;
    if (divisibleFor4){
        if (divisibleFor100){
            if (divisibleFor400)
                return true;
            else
                return false;
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
}
function checkLeapYear() {
    let elementYear = document.getElementById("year");
    let year =  parseInt(elementYear.value);
    let result = "Năm" + year;
    if (isLeapYear(year)){
        result += " là năm nhuận";
    }
    else {
        result += " không là năm nhuận";
    }
    document.getElementById("result").innerText= result;
    let xacnhan = confirm("bạn có muốn kiểm tra tiếp không");
    if (xacnhan){
        elementYear.value = "";
        elementYear.focus();
    }
}
