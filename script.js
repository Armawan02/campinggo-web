function registerUser(event) {
  event.preventDefault();

  const username = document.getElementById("new-username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("new-password").value;

  // Simulasi validasi pendaftaran
  if (username && email && password) {
    alert("Pendaftaran berhasil! Silakan login.");
    window.location.href = "login.html";
  } else {
    document.getElementById("register-status").textContent =
      "Harap isi semua kolom.";
  }

  return false;
}

function loginUser(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Contoh validasi sederhana
  if (username === "admin" && password === "12345") {
    alert("Login berhasil!");
    window.location.href = "index.html"; // Ganti ke halaman tujuan setelah login
  } else {
    document.getElementById("login-status").textContent =
      "Username atau password salah.";
  }

  return false;
}
