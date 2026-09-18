let currentUser = localStorage.getItem("menli_current_user") || null;

function getUserDataKey(key) {
  return `menli_${currentUser || 'guest'}_${key}`;
}

// Predefiniowane pełne palety motywów
const appThemes = {
  emerald: {
    name: "Szmaragdowy Menli (Domyślny)",
    primary: "#58cc02",
    primaryBorder: "#46a302",
    accentLight: "rgba(88, 204, 2, 0.15)",
    gradientEnd: "rgba(88, 204, 2, 0.25)"
  },
  neonBlue: {
    name: "Neonowy Błękit",
    primary: "#1cb0f6",
    primaryBorder: "#1480b3",
    accentLight: "rgba(28, 176, 246, 0.15)",
    gradientEnd: "rgba(28, 176, 246, 0.25)"
  },
  crimson: {
    name: "Krwista Czerwień",
    primary: "#ff4b4b",
    primaryBorder: "#ea2b2b",
    accentLight: "rgba(255, 75, 75, 0.15)",
    gradientEnd: "rgba(255, 75, 75, 0.25)"
  },
  gold: {
    name: "Złoty Czempion",
    primary: "#ffc800",
    primaryBorder: "#e5a400",
    accentLight: "rgba(255, 200, 0, 0.18)",
    gradientEnd: "rgba(255, 200, 0, 0.3)"
  },
  amethyst: {
    name: "Fioletowy Mistrz",
    primary: "#ce82ff",
    primaryBorder: "#a855f7",
    accentLight: "rgba(206, 130, 255, 0.15)",
    gradientEnd: "rgba(206, 130, 255, 0.28)"
  }
};

let userStats = {
  elo: parseInt(localStorage.getItem(getUserDataKey("elo")) || "1000", 10),
  streak: parseInt(localStorage.getItem(getUserDataKey("streak")) || "0", 10),
  lastDate: localStorage.getItem(getUserDataKey("last_date")) || "",
  totalAnswers: parseInt(localStorage.getItem(getUserDataKey("answers")) || "0", 10),
  passXp: parseInt(localStorage.getItem(getUserDataKey("pass_xp")) || "0", 10),
  claimedTiers: JSON.parse(localStorage.getItem(getUserDataKey("claimed_tiers")) || "[]"),
  avatar: localStorage.getItem(getUserDataKey("avatar")) || "icon-512.png",
  customThemeKey: localStorage.getItem(getUserDataKey("custom_theme_key")) || "emerald",
  customBg: localStorage.getItem(getUserDataKey("custom_bg")) || "default",
  bio: localStorage.getItem(getUserDataKey("bio")) || "W drodze na szczyt! 🔥"
};

function getRankName(elo) {
  if (elo < 1050) return "Brąz I";
  if (elo < 1100) return "Brąz II";
  if (elo < 1200) return "Srebro I";
  if (elo < 1300) return "Srebro II";
  if (elo < 1450) return "Złoto I";
  return "Mistrz Menli 👑";
}

function updateTopBarUI() {
  const eloEl = document.getElementById("nav-elo");
  const streakEl = document.getElementById("nav-streak");
  const rankEl = document.getElementById("nav-rank-badge");

  if (streakEl) streakEl.textContent = userStats.streak;
  if (eloEl) eloEl.textContent = userStats.elo;
  if (rankEl) rankEl.textContent = getRankName(userStats.elo);

  const statElo = document.getElementById("stat-elo-val");
  const statRank = document.getElementById("stat-rank-val");
  const statStreak = document.getElementById("stat-streak-val");
  const statAnswers = document.getElementById("stat-total-answers");
  const statUser = document.getElementById("menu-username-display");
  const avatarImg = document.getElementById("menu-avatar-preview");
  const bioInput = document.getElementById("menu-bio-input");
  const rankBadgeLarge = document.getElementById("menu-rank-badge-large");

  if (statElo) statElo.textContent = userStats.elo;
  if (statRank) statRank.textContent = getRankName(userStats.elo);
  if (statStreak) statStreak.textContent = userStats.streak;
  if (statAnswers) statAnswers.textContent = userStats.totalAnswers;
  if (statUser) statUser.textContent = currentUser || "Niezalogowany";
  if (avatarImg) avatarImg.src = userStats.avatar;
  if (bioInput) bioInput.value = userStats.bio;
  if (rankBadgeLarge) rankBadgeLarge.textContent = getRankName(userStats.elo);

  updateBadgesDisplay();
  applyCustomStyles();
}

function updateBadgesDisplay() {
  const badgeStreak = document.getElementById("badge-streak");
  const badgeElo = document.getElementById("badge-elo");
  const badgePass = document.getElementById("badge-pass");

  if (badgeStreak) {
    if (userStats.streak >= 3) badgeStreak.classList.add("unlocked");
    else badgeStreak.classList.remove("unlocked");
  }
  if (badgeElo) {
    if (userStats.elo >= 1200) badgeElo.classList.add("unlocked");
    else badgeElo.classList.remove("unlocked");
  }
  if (badgePass) {
    if (userStats.claimedTiers && userStats.claimedTiers.length >= 3) badgePass.classList.add("unlocked");
    else badgePass.classList.remove("unlocked");
  }
}

function applyCustomStyles() {
  // Próg 1: Motyw kolorystyczny
  const currentTheme = appThemes[userStats.customThemeKey] || appThemes.emerald;
  if (userStats.claimedTiers && userStats.claimedTiers.includes(1)) {
    document.documentElement.style.setProperty('--primary', currentTheme.primary);
    document.documentElement.style.setProperty('--primary-border', currentTheme.primaryBorder);
    document.documentElement.style.setProperty('--selected-bottom', currentTheme.primary);
    document.documentElement.style.setProperty('--selected-border', currentTheme.primary);
    document.documentElement.style.setProperty('--selected-bg', currentTheme.accentLight);
  } else {
    document.documentElement.style.removeProperty('--primary');
    document.documentElement.style.removeProperty('--primary-border');
    document.documentElement.style.removeProperty('--selected-bottom');
    document.documentElement.style.removeProperty('--selected-border');
    document.documentElement.style.removeProperty('--selected-bg');
  }

  // Próg 4: Tła aplikacji (w tym dynamiczny gradient pod kolor motywu)
  if (userStats.claimedTiers && userStats.claimedTiers.includes(4)) {
    if (userStats.customBg === 'dots') {
      document.body.style.backgroundImage = 'radial-gradient(var(--border-gray) 1.5px, transparent 1.5px)';
      document.body.style.backgroundSize = '18px 18px';
    } else if (userStats.customBg === 'grid') {
      document.body.style.backgroundImage = 'linear-gradient(to right, var(--border-gray) 1px, transparent 1px), linear-gradient(to bottom, var(--border-gray) 1px, transparent 1px)';
      document.body.style.backgroundSize = '22px 22px';
    } else if (userStats.customBg === 'stripes') {
      document.body.style.backgroundImage = 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 20px)';
      document.body.style.backgroundSize = 'auto';
    } else if (userStats.customBg === 'gradient') {
      // Dynamiczny gradient pobierający barwę motywu
      document.body.style.backgroundImage = `linear-gradient(145deg, ${currentTheme.accentLight} 0%, ${currentTheme.gradientEnd} 100%)`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundAttachment = 'fixed';
    } else {
      document.body.style.backgroundImage = 'none';
    }
  } else {
    document.body.style.backgroundImage = 'none';
  }
}

function selectThemePalette(themeKey) {
  if (!appThemes[themeKey]) return;
  userStats.customThemeKey = themeKey;
  localStorage.setItem(getUserDataKey("custom_theme_key"), themeKey);
  applyCustomStyles();
  renderThemePickersUI();
}

function selectBackgroundPattern(bgKey) {
  userStats.customBg = bgKey;
  localStorage.setItem(getUserDataKey("custom_bg"), bgKey);
  applyCustomStyles();
}

function renderThemePickersUI() {
  const themeContainer = document.getElementById("theme-presets-container");
  if (!themeContainer) return;
  themeContainer.innerHTML = "";

  Object.keys(appThemes).forEach(key => {
    const t = appThemes[key];
    const isSelected = userStats.customThemeKey === key;
    const item = document.createElement("div");
    item.className = "theme-pill-card" + (isSelected ? " selected" : "");
    item.onclick = () => selectThemePalette(key);
    item.innerHTML = `
      <div class="theme-color-dot" style="background: ${t.primary}; border-color: ${t.primaryBorder};"></div>
      <div style="font-weight: 800; font-size: 0.85rem;">${t.name}</div>
      ${isSelected ? '<span style="margin-left: auto; color: var(--primary); font-weight: 900;">✓</span>' : ''}
    `;
    themeContainer.appendChild(item);
  });

  const bgSelect = document.getElementById("bg-pattern-select");
  if (bgSelect) {
    bgSelect.value = userStats.customBg;
  }
}

function checkDailyStreak() {
  if (!currentUser) return;
  const today = new Date().toISOString().split("T")[0];
  if (!userStats.lastDate) {
    userStats.streak = 1;
    userStats.lastDate = today;
  } else if (userStats.lastDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yStr = yesterday.toISOString().split("T")[0];
    if (userStats.lastDate === yStr) {
      userStats.streak += 1;
    } else {
      userStats.streak = 1;
    }
    userStats.lastDate = today;
  }
  localStorage.setItem(getUserDataKey("streak"), userStats.streak);
  localStorage.setItem(getUserDataKey("last_date"), userStats.lastDate);
  updateTopBarUI();
}

function reloadUserData() {
  userStats.elo = parseInt(localStorage.getItem(getUserDataKey("elo")) || "1000", 10);
  userStats.streak = parseInt(localStorage.getItem(getUserDataKey("streak")) || "0", 10);
  userStats.lastDate = localStorage.getItem(getUserDataKey("last_date")) || "";
  userStats.totalAnswers = parseInt(localStorage.getItem(getUserDataKey("answers")) || "0", 10);
  userStats.passXp = parseInt(localStorage.getItem(getUserDataKey("pass_xp")) || "0", 10);
  userStats.claimedTiers = JSON.parse(localStorage.getItem(getUserDataKey("claimed_tiers")) || "[]");
  userStats.avatar = localStorage.getItem(getUserDataKey("avatar")) || "icon-512.png";
  userStats.customThemeKey = localStorage.getItem(getUserDataKey("custom_theme_key")) || "emerald";
  userStats.customBg = localStorage.getItem(getUserDataKey("custom_bg")) || "default";
  userStats.bio = localStorage.getItem(getUserDataKey("bio")) || "W drodze na szczyt! 🔥";
  updateTopBarUI();
  renderThemePickersUI();
}

function handleAvatarUpload(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    userStats.avatar = e.target.result;
    localStorage.setItem(getUserDataKey("avatar"), userStats.avatar);
    updateTopBarUI();
  };
  reader.readAsDataURL(file);
}

function saveUserBio(newBio) {
  userStats.bio = newBio.trim();
  localStorage.setItem(getUserDataKey("bio"), userStats.bio);
}

function updateProfileUsername(newNick) {
  newNick = newNick.trim();
  if (newNick.length < 3) return alert("Nick musi mieć min. 3 znaki.");
  if (newNick === currentUser) return alert("To Twój obecny nick.");

  const db = getUsersDB();
  if (db[newNick]) return alert("Taki użytkownik już istnieje!");

  db[newNick] = db[currentUser];
  delete db[currentUser];
  saveUsersDB(db);

  const keys = ["elo", "streak", "last_date", "answers", "pass_xp", "claimed_tiers", "avatar", "custom_theme_key", "custom_bg", "bio", "quests_data"];
  keys.forEach(k => {
    const val = localStorage.getItem(`menli_${currentUser}_${k}`);
    if (val !== null) {
      localStorage.setItem(`menli_${newNick}_${k}`, val);
      localStorage.removeItem(`menli_${currentUser}_${k}`);
    }
  });

  currentUser = newNick;
  localStorage.setItem("menli_current_user", currentUser);
  reloadUserData();
  alert("Nazwa użytkownika została zaktualizowana!");
}

function updateProfilePassword(newPass) {
  newPass = newPass.trim();
  if (newPass.length < 4) return alert("Hasło musi mieć min. 4 znaki.");

  const db = getUsersDB();
  if (!db[currentUser]) return;

  db[currentUser].password = newPass;
  saveUsersDB(db);
  alert("Hasło zostało pomyślnie zmienione!");
}

const savedDarkMode = localStorage.getItem("menli_darkmode") === "true";
if (savedDarkMode) {
  document.body.classList.add("dark-mode");
}