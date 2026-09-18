function getUsersDB() {
  return JSON.parse(localStorage.getItem("menli_users_db") || "{}");
}

function saveUsersDB(db) {
  localStorage.setItem("menli_users_db", JSON.stringify(db));
}

function registerUser(username, password) {
  const cleanName = username.trim();
  const cleanPass = password.trim();

  if (cleanName.length < 3) {
    alert("Nazwa użytkownika musi mieć co najmniej 3 znaki.");
    return false;
  }
  if (cleanPass.length < 4) {
    alert("Hasło musi mieć co najmniej 4 znaki.");
    return false;
  }

  const db = getUsersDB();
  if (db[cleanName]) {
    alert("Użytkownik o takiej nazwie już istnieje!");
    return false;
  }

  db[cleanName] = {
    password: cleanPass,
    created: new Date().toISOString()
  };
  saveUsersDB(db);

  setCurrentSession(cleanName);
  return true;
}

function loginUser(username, password) {
  const cleanName = username.trim();
  const cleanPass = password.trim();
  const db = getUsersDB();

  if (!db[cleanName] || db[cleanName].password !== cleanPass) {
    alert("Nieprawidłowy login lub hasło.");
    return false;
  }

  setCurrentSession(cleanName);
  return true;
}

function setCurrentSession(username) {
  currentUser = username;
  localStorage.setItem("menli_current_user", currentUser);
  reloadUserData();
  if (typeof initQuests === "function") initQuests();
  closeAuthModal();
}

function logoutUser() {
  localStorage.removeItem("menli_current_user");
  currentUser = null;
  reloadUserData();
  openAuthModal();
}

function openAuthModal() {
  const modal = document.getElementById("auth-modal");
  if (modal) modal.style.display = "flex";
}

function closeAuthModal() {
  const modal = document.getElementById("auth-modal");
  if (modal) modal.style.display = "none";
}

function initAuthUI() {
  const form = document.getElementById("auth-form");
  const toggleBtn = document.getElementById("auth-toggle-mode");
  const submitBtn = document.getElementById("auth-submit-btn");
  const modalTitle = document.getElementById("auth-title");
  let isRegister = false;

  if (toggleBtn) {
    toggleBtn.onclick = () => {
      isRegister = !isRegister;
      modalTitle.textContent = isRegister ? "Rejestracja w Menli" : "Logowanie do Menli";
      submitBtn.textContent = isRegister ? "Zarejestruj się" : "Zaloguj się";
      toggleBtn.textContent = isRegister 
        ? "Masz już konto? Zaloguj się" 
        : "Nie masz konta? Zarejestruj się";
    };
  }

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const u = document.getElementById("auth-username").value;
      const p = document.getElementById("auth-password").value;

      if (isRegister) {
        if (registerUser(u, p)) form.reset();
      } else {
        if (loginUser(u, p)) form.reset();
      }
    };
  }

  if (!currentUser) {
    openAuthModal();
  }
}