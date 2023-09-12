var listNumber = [];
var content = "";

function themSo() {
    var txtNumber = document.getElementById("txtNumber").value * 1;
    
    listNumber.push(txtNumber);
    content = "Mảng số nguyên: " + listNumber;

    document.getElementById("showArrayNoti").innerHTML = content;
}

function tongSoDuong() {
    if (listNumber.length === 0) {
        alert("Vui lòng nhập số");
        return;
    }

    var totalPositive = 0;
    for (let i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            totalPositive += listNumber[i];
            content = "Tổng các số dương: " + totalPositive;
        }
    }
    document.getElementById("totalPositiveNoti").innerHTML = content;
}

function demSoDuong() {
    if (listNumber.length === 0) {
        alert("Vui lòng nhập số");
        return;
    }

    var countPositive = 0;
    for (let i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            countPositive++;
            content = "Có " + countPositive + " số dương trong mảng";
        }
    }
    document.getElementById("countPositiveNoti").innerHTML = content;
}

function soNhoNhat() {
    if (listNumber.length === 0) {
        alert("Vui lòng nhập số");
        return;
    }

    var minNumber = listNumber[0];
    for (let i = 0; i < listNumber.length; i++) {
        if (listNumber[i] < minNumber) {
            minNumber = listNumber[i];
            content = "Số nhỏ nhất: " + minNumber;
        }
    }
    document.getElementById("minNumberNoti").innerHTML = content;
}

function soDuongNhoNhat() {
    if (listNumber.length === 0) {
        alert("Vui lòng nhập số");
        return;
    }

    var minPositive = Infinity;
    for (let i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0 && listNumber[i] < minPositive) {
            minPositive = listNumber[i];
            content = "Số dương nhỏ nhất: " + minPositive;
        } 
        else if (minPositive === Infinity) {
            content = "Không có số dương nhỏ nhất";
        }
    }
    document.getElementById("minPositiveNoti").innerHTML = content;
}

function soChanCuoiCung() {
    if (listNumber.length === 0) {
        alert("Vui lòng nhập số");
        return;
    }

    var lastEvenNumber = 0;
    for (let i = listNumber.length - 1; i >= 0; i--) {
        if (listNumber[i] % 2 == 0) {
            lastEvenNumber = listNumber[i];
            content = "Số chẵn cuối cùng: " + lastEvenNumber;
        }
        else if (lastEvenNumber == 0) {
            content = "Không có số chẵn trong mảng";
        }
    }
    document.getElementById("lastEvenNoti").innerHTML = content;
}

var viTri_1 = document.getElementById("viTri_1").value * 1;
var viTri_2 = document.getElementById("viTri_2").value * 1;
function doiChoGiaTri(listNumber , viTri_1 , viTri_2) {
    if (viTri_1 < 0 || viTri_1 >= listNumber.length || viTri_2 < 0 || viTri_2 >= listNumber.length) {
        return "Vị trí không hợp lệ";
    }

    var temp = listNumber[viTri_1];
    listNumber[viTri_1] = listNumber[viTri_2];
    listNumber[viTri_2] = temp;

    return listNumber;
}

function mangDaDoiCho() {
    var mangDaDoiCho = doiChoGiaTri(listNumber , viTri_1 ,viTri_2);
    if (typeof mangDaDoiCho === "string") {
        console.log(mangDaDoiCho);
    } else {
        content = "Mảng sau khi đổi chỗ: " + mangDaDoiCho;
    }

    document.getElementById("switchIndexNoti").innerHTML = content;
}

function sapXepTangDan() {
    if (listNumber.length === 0) {
        alert("Vui lòng nhập số");
        return;
    }

    for (let i = 0; i < listNumber.length - 1; i++) {
        for (let j = i + 1; j < listNumber.length; j++) {
            if (listNumber[i] > listNumber[j]) {
                var temp = listNumber[i];
                listNumber[i] = listNumber[j];
                listNumber[j] = temp;
            }
        }
    }
    content = "Mảng tăng dần: " + listNumber;
    document.getElementById("arrangeAscendNoti").innerHTML = content;
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function timSoNguyenToDauTien() {
    for (let i = 0; i < listNumber.length; i++) {
        var num = listNumber[i];
        if (isPrime(num)) {
            return num;
        }
    }
    return -1;
}

function soNguyenToDauTien() {
    if (listNumber.length === 0) {
        alert("Vui lòng nhập số");
        return;
    }

    var firstPrime = timSoNguyenToDauTien(listNumber);
    if (firstPrime === -1) {
        content = "Mảng không có số nguyên tố";
    } else {            
        content = "Số nguyên tố đầu tiên: " + firstPrime;
    }
    
    document.getElementById("firstPrimeNoti").innerHTML = content;
}

function demSoNguyen() {
    if (listNumber.length === 0) {
        alert("Vui lòng nhập số");
        return;
    }

    var countInteger = 0;
    for (let i = 0; i < listNumber.length; i++) {
        if (Number.isInteger(listNumber[i])) {
            countInteger++;
        }
    }
    content = "Số lượng số nguyên trong mảng: " + countInteger;
    document.getElementById("countInteger").innerHTML = content;
}

function soSanh_SoAm_SoDuong() {
    if (listNumber.length === 0) {
        alert("Vui lòng nhập số");
        return;
    }

    var countPositive = 0;
    var countNegative = 0;
    for (let i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            countPositive++;
        } else if (listNumber[i] < 0) {
            countNegative++;
        }
    }

    if (countNegative < countPositive) {
        content = "Có nhiều số dương trong mảng hơn";
    } else if (countNegative > countPositive) {
        content = "Có nhiều số âm trong mảng hơn";
    } else {
        content = "Số lượng số âm và dương bằng nhau";
    }

    document.getElementById("compareNumberNoti").innerHTML = content;
}