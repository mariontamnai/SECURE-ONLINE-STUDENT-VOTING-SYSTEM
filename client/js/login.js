document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const regNo = document.getElementById("regNo").value.trim();
  const password = document.getElementById("password").value.trim();

  if (regNo === "" || password === "") {
    alert("Please fill in all fields");
    return;
  }

  if (password.length >= 4) {
    localStorage.setItem("studentLoggedIn", "true");
    localStorage.setItem("regNo", regNo);

    alert("Login successful! Proceed to face verification.");
  } else {
    alert("Invalid credentials");
  }
});
