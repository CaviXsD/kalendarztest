// Tu byłaby integracja z Google Identity Services
// Po zalogowaniu zapisujemy nazwę i email do localStorage
function onLoginSuccess(profile) {
  localStorage.setItem("user_name", profile.getName());
  localStorage.setItem("user_email", profile.getEmail());
  document.getElementById("user-info").innerHTML =
    `Zalogowano jako: ${profile.getName()} (${profile.getEmail()})`;
}
