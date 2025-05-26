//your JS code here. If required.
// Function to check localStorage and show "Login as existing user" button if credentials are saved
function checkExistingUser() {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    document.getElementById("existing").style.display = "inline-block";
  } else {
    document.getElementById("existing").style.display = "none";
  }
}

window.onload = function () {
  checkExistingUser();

  const form = document.getElementById("login-form");
  const existingBtn = document.getElementById("existing");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("checkbox").checked;

    alert(`Logged in as ${username}`);

    if (remember) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    checkExistingUser();
  });

  existingBtn.addEventListener("click", function () {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      alert(`Logged in as ${savedUsername}`);
    }
  });
};
