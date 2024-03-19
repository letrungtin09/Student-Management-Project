// function SinhVien(){
// }

//Prototype là lớp đối tượng trong js <= 5
var SinhVien = function(){
    // Khai báo các thuộc tính
    this.maSV = "";
    this.tenSV = "";
    this.loaiSV = "";
    this.diemToan = "";
    this.diemLy = "";
    this.diemHoa = "";
    this.diemRenLuyen = "";
    this.tinhDiemTrungBinh = function(){
        var dtb = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
        return dtb;
    }
    this.xepLoai = function(){
        var diemTrungBinh = this.tinhDiemTrungBinh();
        if(this.diemRenLuyen < 5){
            return "Yếu";
        }
        else{
            if(diemTrungBinh < 5){
                return "Yếu";
            }
            else if(diemTrungBinh >= 5 && diemTrungBinh < 6.5){
                return "Trung bình";
            }
            else if(diemTrungBinh >= 6.5 && diemTrungBinh < 8){
                return "Khá";
            }
            else if(diemTrungBinh >= 8 && diemTrungBinh < 9){
                return "Giỏi";
            }
            else if(diemTrungBinh >= 9 && diemTrungBinh <= 10){
                return "Xuất sắc";
            }
            else{
                return "Không hợp lệ";
            }
        }
    }
}