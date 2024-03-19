// var sinhVien = { //scope instance: thể hiện
//     maSV:1, //key là thuộc tính: value
//     tenSV:"Nguyen Van A",
//     loaiSV:"Kho khan",
//     diemToan:1,
//     diemLy:2,
//     diemHoa:3,
//     tinhDiemTrungBinh: function(){
//         var dtb = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
//         return dtb;
//     },
//     xepLoai: function(){
//         return "Kha";
//     }
// }

//diemTrungBinh: //Giá trị nào tính toán được ta không đưa vào lưu trữ
//Truy xuất giá trị thuộc tính của đối tượng
//2 cách truy xuất giá trị thuộc tính
//cách 1 [ten_doi_tuong].[ten_thuoc_tinh]
// console.log("Ma SV", sinhVien.maSV);
//cách 2 [ten_doi_tuong]['ten_thuoc_tinh']
// console.log("Ten SV", sinhVien['tenSV']);


var sinhVien = new SinhVien();
var validation = new Validation();

var xuLyXacNhan = function(){
    sinhVien.maSV = document.querySelector("#maSinhVien").value;
    sinhVien.tenSV = document.querySelector("#tenSinhVien").value;
    sinhVien.loaiSV = document.querySelector("#loaiSinhVien").value;
    sinhVien.diemToan = document.querySelector("#diemToan").value;
    sinhVien.diemLy = document.querySelector("#diemLy").value;
    sinhVien.diemHoa = document.querySelector("#diemHoa").value;
    sinhVien.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
    //DOM đến giao diện hiển thị dữ liệu

    //Kiểm tra validation
    var valid = true;
    valid &= validation.kiemTraRong(sinhVien.maSV, "Mã sinh viên", "#error_maSinhVien_required") 
    & validation.kiemTraRong(sinhVien.tenSV, "Tên sinh viên", "#error_tenSinhVien_required")  
    & validation.kiemTraRong(sinhVien.diemToan, "Điểm toán", "#error_diemToan_required") 
    & validation.kiemTraRong(sinhVien.diemLy, "Điểm lý", "#error_diemLy_required") 
    & validation.kiemTraRong(sinhVien.diemHoa, "Điểm hóa", "#error_diemHoa_required") 
    & validation.kiemTraRong(sinhVien.diemRenLuyen, "Điểm rèn luyện", "#error_diemRenLuyen_required");
    //Kiểm tra tất cả là số
    valid &= validation.kiemTraTatCaLaSo(sinhVien.maSV, "Mã sinh viên", "#error_maSinhVien_all_number") & validation.kiemTraTatCaLaSo(sinhVien.diemToan, "Điểm toán", "#error_diemToan_all_number") & validation.kiemTraTatCaLaSo(sinhVien.diemLy, "Điểm lý", "#error_diemLy_all_number") & validation.kiemTraTatCaLaSo(sinhVien.diemHoa, "Điểm hóa", "#error_diemHoa_all_number") & validation.kiemTraTatCaLaSo(sinhVien.diemRenLuyen, "Điểm rèn luyện", "#error_diemRenLuyen_all_number");
    //Kiểm tra độ dài
    valid &= validation.kiemTraDoDaiChuoi(sinhVien.maSV, "Mã sinh viên", "#error_maSinhVien_min_max_length", 4, 4);
    //Kiểm tra giá trị
    valid &= validation.kiemTraGiaTri(sinhVien.diemToan, "Điểm toán", "#error_diemToan_min_max_value", 0, 10) & validation.kiemTraGiaTri(sinhVien.diemLy, "Điểm lý", "#error_diemLy_min_max_value", 0, 10) & validation.kiemTraGiaTri(sinhVien.diemHoa, "Điểm hóa", "#error_diemHoa_min_max_value", 0, 10) & validation.kiemTraGiaTri(sinhVien.diemRenLuyen, "Điểm rèn luyện", "#error_diemRenLuyen_min_max_value", 0, 10);
    //Kiểm tra tất cả là chữ
    valid &= validation.kiemTraTatCaLaChu(sinhVien.tenSV, "Tên sinh viên", "#error_tenSinhVien_all_letter");
    if(!valid){
        return ;
    }

    //Xử lý kết quả ra giao diện
    document.querySelector("#txtTenSinhVien").innerHTML = sinhVien.tenSV;
    document.querySelector("#txtMaSinhVien").innerHTML = sinhVien.maSV;
    document.querySelector("#txtLoaiSinhVien").innerHTML = sinhVien.loaiSV;
    document.querySelector("#txtDiemTrungBinh").innerHTML = sinhVien.tinhDiemTrungBinh().toFixed(2); //sinhVien["tinhDiemTrungBinh"]().toFixed(2);
    document.querySelector("#txtXepLoai").innerHTML = sinhVien.xepLoai(); //sinhVien["xepLoai"]();
}

document.querySelector("#btnXacNhan").onclick = xuLyXacNhan;