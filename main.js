function Kiemtra() {
    let hoTen = document.dangky.hoten.value;
    let email = document.dangky.email.value;
    let sdt = document.dangky.sdt.value;
    let choNuoc = document.dangky.chonnuoc.value;
    let chonKhoaHoc = document.dangky.chonkhoahoc.value;
    let diaChi = document.dangky.diachi.value;
    if (hoTen.length == "") {
        alert("Vui lòng nhập đầy đủ Họ và Tên")
        document.dangky.hoten.focus();
        return false;
    }
    if (email.length == "") {
        alert("Vui lòng nhập Email")
        document.dangky.email.focus();
        return false;
    }
    if (sdt.length == "") {
        alert("Vui lòng nhập đầy đủ Số Điện Thoại")
        document.dangky.sdt.focus();
        return false;
    }
    if (choNuoc == "Chọn nước") {
        alert("Vui lòng chọn một nước");
        return false;
    }
    if (chonKhoaHoc == "Chọn khoá học") {
        alert("Vui lòng chọn một Khoá học");
        return false;
    }
    if (diaChi.length == "") {
        alert("Vui lòng nhập đầy đủ Số Địa Chỉ")
        document.dangky.diachi.focus();
        return false;
    }
    alert("Chúc mừng bạn đã đăng ký khoá học thành công");
    let thongTin = "<h1>Thông Tin Đăng Ký</h1>" +
        "<h4>Họ và tên:</h4>" + "<p>" + hoTen + "</p>" +
        "<h4>Email:</h4>" + "<p>" + email + "</p>" +
        "<h4>Số điện thoại:</h4>" + "<p>" + sdt + "</p>" +
        "<h4>Ngôn Ngữ:</h4>" + "<p>" + choNuoc + "</p>" +
        "<h4>Khoá học:</h4>" + "<p>" + chonKhoaHoc + "</p>" +
        "<h4>Địa chỉ:</h4>" + "<p>" + diaChi + "</p>";
    document.getElementById("hienthongtin").innerHTML = thongTin;
}
function Xoa() {
    alert("Xoá thành công! Vui lòng nhập lại thông tin của bạn !")
}