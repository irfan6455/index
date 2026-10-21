// DATA MENU: Ganti di sini aja kalau mau tambah menu
const menu = [
  { nama: "Kopi Susu", harga: 18000, emoji: "☕" },
  { nama: "Americano", harga: 15000, emoji: "☕" },
  { nama: "Croissant", harga: 20000, emoji: "🥐" }
];

// Ambil elemen dari HTML
const daftarMenu = document.getElementById("daftarMenu");
const inputCari = document.getElementById("cari");

// Fungsi untuk menampilkan menu ke layar
function tampilkanMenu(data) {
  daftarMenu.innerHTML = ""; // Kosongkan dulu
  
  data.forEach(item => {
    // Buat kartu untuk setiap menu
    const kartu = document.createElement("div");
    kartu.className = "kartu-profil";
    kartu.innerHTML = `
      <div style="font-size: 50px">${item.emoji}</div>
      <h3>${item.nama}</h3>
      <p>Rp ${item.harga.toLocaleString()}</p>
      <button onclick="tambahKeKeranjang('${item.nama}', ${item.harga})">Tambah</button>
    `;
    daftarMenu.appendChild(kartu);
  });
}

// Fungsi pencarian
inputCari.addEventListener("input", () => {
  const kataKunci = inputCari.value.toLowerCase();
  const hasil = menu.filter(m => m.nama.toLowerCase().includes(kataKunci));
  tampilkanMenu(hasil);
});

// Tampilkan semua menu saat pertama buka
tampilkanMenu(menu);

// Fungsi keranjang sederhana
let total = 0;
function tambahKeKeranjang(nama, harga) {
  total += harga;
  alert(`${nama} ditambahkan! Total: Rp ${total}`);
}
