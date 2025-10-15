document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim().toLowerCase();

  if (username === "citra" && password === "citra") {
    // login berhasil
    Swal.fire({
      icon: "success",
      title: "Login Berhasil 💖",
      text: "Hai ayangg citraaa~ 😘",
      showConfirmButton: false,
      timer: 2000
    }).then(() => {
      window.location.href = "birthday.html"; // halaman selanjutnya
    });
  } else {
    // login gagal
    Swal.fire({
      icon: "error",
      title: "Salah sayangg 😢",
      text: "Username atau passwordnya salah, coba lagi ya 💕"
    });
  }
});
