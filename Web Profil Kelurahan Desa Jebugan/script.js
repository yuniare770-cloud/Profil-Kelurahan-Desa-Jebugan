/* =========================
   PESAN SELAMAT DATANG
   ========================= */

/* Mengecek apakah halaman yang dibuka adalah index.html */
if (window.location.pathname.includes("index.html")) {

    /* Menampilkan popup alert */
    alert("Selamat datang di Website Desa Jebugan");
}

/* =========================
   MENGUBAH TEKS SAAT MOUSE
   ========================= */

/* Mengambil elemen dengan id="judul" */
const judul = document.getElementById("judul");

/* Event saat mouse masuk ke elemen */
judul.addEventListener("mouseover", function(){

    /* Mengubah isi teks */
    judul.innerHTML = "Desa Jebugan Digital";

});

/* Event saat mouse keluar dari elemen */
judul.addEventListener("mouseout", function(){

    /* Mengembalikan teks semula */
    judul.innerHTML = "Selamat Datang di Desa Jebugan";

});

/* =========================
   TOMBOL SCROLL KE ATAS
   ========================= */

/* Mengambil elemen tombol dengan id="topBtn" */
const topBtn = document.getElementById("topBtn");

/* Event saat halaman discroll */
window.addEventListener("scroll", function(){

    /* Jika scroll lebih dari 200px */
    if(window.scrollY > 200){

        /* Tombol ditampilkan */
        topBtn.style.display = "block";

    }else{

        /* Tombol disembunyikan */
        topBtn.style.display = "none";
    }

});

/* Event saat tombol diklik */
topBtn.addEventListener("click", function(){

    /* Scroll otomatis ke atas dengan animasi smooth */
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* =========================
   JAM DIGITAL
   ========================= */

/* Function untuk update jam */
function updateJam(){

    /* Mengambil waktu sekarang */
    const waktu = new Date();

    /* Menampilkan jam format Indonesia */
    document.getElementById("jam").innerHTML =
    waktu.toLocaleTimeString('id-ID');

}

/* =========================
   COUNTER ANGKA STATISTIK
   ========================= */

/* Mengambil semua elemen class="angka" */
const angka = document.querySelectorAll(".angka");

/* Perulangan setiap elemen */
angka.forEach(item => {

    /* Function update angka */
    const update = () => {

        /* Mengambil target angka dari data-target */
        const target = +item.getAttribute("data-target");

        /* Mengambil angka saat ini */
        const sekarang = +item.innerText;

        /* Menentukan jumlah pertambahan angka */
        const tambah = target / 100;

        /* Jika angka sekarang masih kurang dari target */
        if(sekarang < target){

            /* Menambahkan angka sedikit demi sedikit */
            item.innerText = `${Math.ceil(sekarang + tambah)}`;

            /* Mengulang function setiap 20ms */
            setTimeout(update, 20);

        }else{

            /* Jika sudah mencapai target */
            item.innerText = target;
        }

    }

    /* Menjalankan function update */
    update();

});