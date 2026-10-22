let isChange = false;

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