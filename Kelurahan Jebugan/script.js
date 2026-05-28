/* Mengecek apakah halaman yang dibuka adalah index.html */
if (window.location.pathname.includes("index.html")) {

    /* Menampilkan popup alert */
    alert("Selamat datang di Website Desa Jebugan");
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});