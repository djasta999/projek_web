import { ambilKutipan, ambilRepoo } from "./api.js";

let isChange = false;
const formKontak = document.getElementById("form-kontak");

formKontak.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaUser = document.getElementById("nama_user").value.trim();
    const emailUser = document.getElementById("email_user").value.trim();
    const pesanError = document.getElementById("pesanError");

    if (namaUser === "" || emailUser === "") {
        pesanError.innerText = "Nama dan email wajib diisi!";
        pesanError.style.display = "block";
        pesanError.style.color = "red";
    } else {
        pesanError.innerText = "Pesan berhasil dikirim!";
        pesanError.style.display = "block";
        pesanError.style.color = "green";
        
        document.getElementById("nama_user").value = "";
        document.getElementById("email_user").value = "";
    }
});


// 1. Ambil elemen tombol dan elemen H1
let tombol = document.getElementById("btn-ubah");
let elemenNama = document.getElementById("judul-nama");

// 2. Pasang event listener 'click' pada tombol
tombol.addEventListener("click", function () {
  if (isChange==true){
    elemenNama.innerText = "I Putu Djastasena Putra";
    isChange = false;
  }else{
    elemenNama.innerText = "mantap";
    isChange = true;
  }
});

let tombol_gelap = document.getElementById("btn-theme");
tombol_gelap.addEventListener("click", function(){document.body.classList.toggle("dark-mode")});

let btnKutipan = document.getElementById("btn-kutipan");

btnKutipan.addEventListener("click", ambilKutipan);
ambilKutipan();
ambilRepoo();
