function xemGia() {
  let ten = document.getElementById("ten_hoa_qua").value.trim().toLowerCase();
  let gia = "";

  switch (ten) {
    case "ổi":
    case "dưa hấu":
      gia = "20000 VNĐ/kg";
      break;
    case "táo":
      gia = "30000 VNĐ/kg";
      break;
    case "cam":
    case "chôm chôm":
      gia = "40000 VNĐ/kg";
      break;
    case "măng cụt":
      gia = "50000 VNĐ/kg";
      break;
    default:
      gia = "Tìm không thấy";
  }

  document.getElementById("ket_qua").innerText = gia;
}
