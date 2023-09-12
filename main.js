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
    for (let i = 0; i < listNumber.length; i++) {
        if (listNumber[i] % 2 == 0) {
            lastEvenNumber = listNumber[i];
            content = "Số chẵn cuối cùng: " + listNumber[i];
        }
        else if (lastEvenNumber == 0) {
            content = "Không có số chẵn trong mảng";
        }
    }
    document.getElementById("lastEvenNoti").innerHTML = content;
}
