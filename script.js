// 1. Ambil elemen tombol dan elemen H1
let tombol = document.getElementById("btn-ubah");
let elemenNama = document.getElementById("judul-nama");

// 2. Pasang event listener 'click' pada tombol
tombol.addEventListener("click", function () {
  elemenNama.innerText = "Halo, Nama Berhasil Diubah Lewat Klik!";
});