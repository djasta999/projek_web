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

// Langkah 1: Tangkap Elemen DOM
const teksKutipan = document.getElementById("teks-kutipan");
const btnKutipan = document.getElementById("btn-kutipan");

// Langkah 2: Buat Fungsi Asynchronous
async function ambilKutipan() {
  // Langkah 3: Terapkan Error Handling (Try/Catch)
  try {
    // Langkah 4: Logika Pengambilan Data (Di dalam blok try)
    // Tampilkan indikator visual ke user
    teksKutipan.innerText = "Sedang memuat...";

    // Mengambil data dari API
    const response = await fetch("https://dummyjson.com/quotes/random");
    
    // Memproses respons mentah menjadi objek JavaScript
    const data = await response.json();

    // Mengubah teks paragraf dengan kombinasi kutipan dan penulis
    teksKutipan.innerText = `"${data.quote}" - ${data.author}`;
    
  } catch (error) {
    // Di dalam blok catch: Tampilkan pesan error jika terjadi masalah jaringan
    teksKutipan.innerText = "Gagal memuat kutipan. Periksa koneksi Anda.";
    console.error("Detail error:", error); // Opsional: untuk membantu debugging di konsol
  }
}

// Langkah 5: Panggil Fungsi & Pasang Event Listener
// Memanggil fungsi satu kali saat halaman pertama kali dimuat
ambilKutipan();

// Menjalankan fungsi setiap kali tombol diklik
btnKutipan.addEventListener("click", ambilKutipan);

let daftar_repo = document.getElementById("daftar_repo");
let tampilkan_repo = document.getElementById("tampilkan_repo");

async function ambilRepoo() {
  try {
    tampilkan_repo.innerText = "Memuat daftar repositori...";
    const responRepo = await fetch("https://api.github.com/users/djasta999/repos");
    
    // 1. Memastikan respons sukses (ok) sebelum mengambil data
    if (responRepo.ok) {
      let dataRepoo = await responRepo.json();
      let repoLima = dataRepoo.slice(0, 5);
      
      // 2. Memperbaiki penutupan sintaks kurung kurawal map() dan chaining join()
      let htmlRepoo = repoLima.map(item => {
        return `<li><a href="${item.html_url}">${item.name}</a></li>`;
      }).join('');
      
      // 3. Memasukkan string HTML hasil chaining ke elemen DOM
      daftar_repo.innerHTML = htmlRepoo;
    } else {
      // Menangani jika API GitHub merespons tapi statusnya error (misal 404/500)
      tampilkan_repo.innerText = "Gagal memuat repositori.";
    }
  } catch (error) {
    // Menangani error jaringan atau masalah tak terduga lainnya
    console.error(error);
    tampilkan_repo.innerText = "Terjadi kesalahan jaringan.";
  }

}
ambilRepoo()


  
