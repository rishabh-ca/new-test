document.addEventListener("DOMContentLoaded", function () {
  // Create container
  const container = document.createElement("div");
  container.className = "form-container";

  // Insert HTML for the form
  container.innerHTML = `
    <h2>Create Account</h2>
    <form id="signupForm">
      <div class="input-group">
        <label>First Name</label>
        <input type="text" id="firstName" required />
      </div>

      <div class="input-group">
        <label>Last Name</label>
        <input type="text" id="lastName" required />
      </div>

      <div class="input-group">
        <label>Username</label>
        <input type="text" id="username" required />
      </div>

      <div class="input-group">
        <label>Organization Name</label>
        <input type="text" id="orgName" required />
      </div>

      <div class="input-group">
        <label>Password</label>
        <input type="password" id="password" required />
      </div>

      <div class="input-group">
        <label>Confirm Password</label>
        <input type="password" id="confirmPassword" required />
      </div>

      <button type="submit">Sign Up</button>
    </form>
  `;

  document.body.appendChild(container);

  // Form submission logic
  document
    .getElementById("signupForm")
    .addEventListener("submit", async function (e) {
      e.preventDefault();

      const data = {
        firstName: document.getElementById("firstName").value.trim(),
        lastName: document.getElementById("lastName").value.trim(),
        username: document.getElementById("username").value.trim(),
        orgName: document.getElementById("orgName").value.trim(),
        password: document.getElementById("password").value,
        confirmPassword: document.getElementById("confirmPassword").value,
      };

      if (data.password !== data.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

    console.log("form submitted successfully")
    });
});
