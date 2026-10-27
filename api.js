// Langkah 1: Tangkap Elemen DOM
const teksKutipan = document.getElementById("teks-kutipan");
const btnKutipan = document.getElementById("btn-kutipan");

// Langkah 2: Buat Fungsi Asynchronous
export async function ambilKutipan() {
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



// Menjalankan fungsi setiap kali tombol diklik
//btnKutipan.addEventListener("click", ambilKutipan);

let daftar_repo = document.getElementById("daftar_repo");
let tampilkan_repo = document.getElementById("tampilkan_repo");

export async function ambilRepoo() {
  let dataCache = localStorage.getItem("repo_cache");
      if (dataCache){
     let dataparsed = JSON.parse(dataCache).map(item => {
        return `<li><a href="${item.html_url}">${item.name}</a></li>`;
      }).join('');
      daftar_repo.innerHTML = dataparsed;
      tampilkan_repo.innerText = "";
      return;
    };
  try {
    tampilkan_repo.innerText = "Memuat daftar repositori...";
    const responRepo = await fetch("https://api.github.com/users/djasta999/repos");
    
    // 1. Memastikan respons sukses (ok) sebelum mengambil data
    if (responRepo.ok) {
      let dataRepoo = await responRepo.json();
      let repoLima = dataRepoo.slice(0, 5);
      localStorage.setItem("repo_cache", JSON.stringify(repoLima))
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



  
