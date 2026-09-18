let currentSubject = "german";

let cheats = {
  infiniteHearts: false
};
let settingsConfig = {
  hintsEnabled: localStorage.getItem("menli_hints_enabled") === "true"
};

const allQuestsPool = [
  { id: "q1", title: "Rozwiąż 5 zadań", target: 5, rewardElo: 15, rewardXp: 30, type: "answers" },
  { id: "q2", title: "Rozwiąż 10 zadań", target: 10, rewardElo: 25, rewardXp: 45, type: "answers" },
  { id: "q3", title: "Rozwiąż 15 zadań", target: 15, rewardElo: 35, rewardXp: 60, type: "answers" },
  { id: "q4", title: "Rozwiąż 20 zadań", target: 20, rewardElo: 45, rewardXp: 75, type: "answers" },
  { id: "q5", title: "Mistrz skupienia: rozwiąż 25 zadań", target: 25, rewardElo: 55, rewardXp: 90, type: "answers" },
  
  { id: "q6", title: "Odpowiedz poprawnie na 3 pytania z rzędu", target: 3, rewardElo: 20, rewardXp: 35, type: "streak" },
  { id: "q7", title: "Odpowiedz poprawnie na 5 pytań z rzędu", target: 5, rewardElo: 30, rewardXp: 50, type: "streak" },
  { id: "q8", title: "Niezłomny: 7 poprawnych odpowiedzi z rzędu", target: 7, rewardElo: 40, rewardXp: 65, type: "streak" },
  { id: "q9", title: "Perfekcja: 10 poprawnych z rzędu", target: 10, rewardElo: 50, rewardXp: 85, type: "streak" },
  { id: "q10", title: "Combo mistrz: 12 poprawnych pod rząd", target: 12, rewardElo: 60, rewardXp: 100, type: "streak" },

  { id: "q11", title: "Rozwiąż 5 zadań z Języka Niemieckiego", target: 5, rewardElo: 20, rewardXp: 40, type: "german_answers" },
  { id: "q12", title: "Rozwiąż 10 zadań z Języka Niemieckiego", target: 10, rewardElo: 35, rewardXp: 60, type: "german_answers" },
  { id: "q13", title: "Ukończ quiz z Języka Niemieckiego", target: 1, rewardElo: 25, rewardXp: 50, type: "german_quiz" },
  
  { id: "q14", title: "Rozwiąż 5 zadań z Matematyki", target: 5, rewardElo: 20, rewardXp: 40, type: "math_answers" },
  { id: "q15", title: "Rozwiąż 10 zadań z Matematyki", target: 10, rewardElo: 35, rewardXp: 60, type: "math_answers" },
  { id: "q16", title: "Ukończ quiz z Matematyki", target: 1, rewardElo: 25, rewardXp: 50, type: "math_quiz" },

  { id: "q17", title: "Spróbuj sił w Teście BOSS", target: 1, rewardElo: 30, rewardXp: 50, type: "boss_try" },
  { id: "q18", title: "Pokonaj dowolnego Bossa (75 pytań)", target: 1, rewardElo: 60, rewardXp: 100, type: "boss" },
  { id: "q19", title: "Pokonaj Niemieckiego Bossa", target: 1, rewardElo: 65, rewardXp: 110, type: "boss_german" },
  { id: "q20", title: "Pokonaj Matematycznego Bossa", target: 1, rewardElo: 65, rewardXp: 110, type: "boss_math" },

  { id: "q21", title: "Szybki refleks: ukończ quiz w < 60 sekund", target: 1, rewardElo: 35, rewardXp: 55, type: "speed_60" },
  { id: "q22", title: "Błyskawica: ukończ quiz w < 45 sekund", target: 1, rewardElo: 45, rewardXp: 75, type: "speed_45" },
  { id: "q23", title: "Ukończ 2 dowolne quizy", target: 2, rewardElo: 30, rewardXp: 50, type: "any_quiz" },
  { id: "q24", title: "Ukończ 3 dowolne quizy", target: 3, rewardElo: 45, rewardXp: 70, type: "any_quiz" },
  { id: "q25", title: "Prawdziwy pracuś: 35 rozwiązanych zadań", target: 35, rewardElo: 70, rewardXp: 120, type: "answers" }
];

const passTiers = [
  { tier: 1, xpReq: 100, title: "Zmiana motywu", desc: "Możliwość wyboru własnego koloru akcentu aplikacji" },
  { tier: 2, xpReq: 200, title: "+100 ELO", desc: "Zastrzyk 100 punktów rankingowych ELO" },
  { tier: 3, xpReq: 300, title: "+1 Quest na dzień", desc: "Dodatkowe 4. dzienne wyzwanie do zdobywania nagród" },
  { tier: 4, xpReq: 400, title: "Nowe tła", desc: "Możliwość wyboru wzoru tła aplikacji" },
  { tier: 5, xpReq: 500, title: "Animacja startowa", desc: "Efektowna animacja splash-screen przy otwieraniu" }
];

function getDailyQuestsList() {
  const today = new Date().toISOString().split("T")[0];
  let seed = 0;
  for (let i = 0; i < today.length; i++) {
    seed = (seed * 31 + today.charCodeAt(i)) % 1000000;
  }

  const shuffled = [...allQuestsPool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    seed = (seed * 9301 + 49297) % 233280;
    const j = Math.floor((seed / 233280) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const hasExtraQuest = userStats.claimedTiers && userStats.claimedTiers.includes(3);
  const count = hasExtraQuest ? 4 : 3;
  return shuffled.slice(0, count);
}

function initQuests() {
  if (!currentUser) return;
  const today = new Date().toISOString().split("T")[0];
  const questDataKey = getUserDataKey("quests_data");
  let saved = JSON.parse(localStorage.getItem(questDataKey) || "{}");

  if (saved.date !== today) {
    saved = {
      date: today,
      progress: {},
      claimed: {}
    };
    localStorage.setItem(questDataKey, JSON.stringify(saved));
  }
  renderQuests();
  renderPass();
}

function updateQuestProgress(type, val = 1) {
  if (!currentUser) return;
  const questDataKey = getUserDataKey("quests_data");
  let saved = JSON.parse(localStorage.getItem(questDataKey) || "{}");
  if (!saved.progress) saved.progress = {};

  if (type === "streak") {
    saved.progress.streak = Math.max(saved.progress.streak || 0, val);
  } else {
    saved.progress[type] = (saved.progress[type] || 0) + val;
  }

  localStorage.setItem(questDataKey, JSON.stringify(saved));
  renderQuests();
}

function claimQuestReward(questId) {
  const questDataKey = getUserDataKey("quests_data");
  let saved = JSON.parse(localStorage.getItem(questDataKey) || "{}");
  const quest = allQuestsPool.find(q => q.id === questId);

  if (!quest || (saved.claimed && saved.claimed[questId])) return;

  if (!saved.claimed) saved.claimed = {};
  saved.claimed[questId] = true;
  localStorage.setItem(questDataKey, JSON.stringify(saved));

  userStats.elo += quest.rewardElo;
  userStats.passXp += quest.rewardXp;
  localStorage.setItem(getUserDataKey("elo"), userStats.elo);
  localStorage.setItem(getUserDataKey("pass_xp"), userStats.passXp);

  updateTopBarUI();
  renderQuests();
  renderPass();
  playSound("win");
}

function renderQuests() {
  const container = document.getElementById("quests-list-container");
  if (!container || !currentUser) return;

  const questDataKey = getUserDataKey("quests_data");
  let saved = JSON.parse(localStorage.getItem(questDataKey) || "{}");
  const progress = saved.progress || {};
  const claimed = saved.claimed || {};

  container.innerHTML = "";
  const dailyQuests = getDailyQuestsList();

  dailyQuests.forEach(q => {
    const currentVal = Math.min(progress[q.type] || 0, q.target);
    const isDone = currentVal >= q.target;
    const isClaimed = !!claimed[q.id];

    const card = document.createElement("div");
    card.className = "quest-item-card";
    card.innerHTML = `
      <div style="flex: 1;">
        <div style="font-weight: 800; font-size: 0.95rem;">${q.title}</div>
        <div style="font-size: 0.8rem; color: var(--subtext);">+${q.rewardElo} ELO | <span style="color: var(--secondary); font-weight: 700;">+${q.rewardXp} XP Pass</span></div>
        <div class="progress-bar-container" style="height: 8px; margin: 6px 0 0 0;">
          <div class="progress-bar-fill" style="width: ${(currentVal / q.target) * 100}%;"></div>
        </div>
      </div>
      <div>
        ${isClaimed 
          ? '<span style="color: var(--primary); font-weight: 800; font-size: 0.85rem;">Odebrano ✓</span>' 
          : `<button class="action-btn" style="padding: 8px 12px; font-size: 0.8rem; width: auto;" 
              ${!isDone ? "disabled" : ""} 
              onclick="claimQuestReward('${q.id}')">Odbierz</button>`
        }
      </div>
    `;
    container.appendChild(card);
  });
}

function renderPass() {
  const container = document.getElementById("pass-tier-list");
  const xpVal = document.getElementById("pass-xp-display");
  if (!container || !currentUser) return;

  if (xpVal) xpVal.textContent = userStats.passXp;
  container.innerHTML = "";

  passTiers.forEach(t => {
    const isUnlocked = userStats.passXp >= t.xpReq;
    const isClaimed = userStats.claimedTiers && userStats.claimedTiers.includes(t.tier);

    const card = document.createElement("div");
    card.className = "pass-tier-card" + (isUnlocked ? " unlocked" : "");
    card.innerHTML = `
      <div class="tier-badge">Poziom ${t.tier} (${t.xpReq} XP)</div>
      <div style="font-weight: 800; font-size: 1rem; margin-bottom: 2px;">${t.title}</div>
      <div style="font-size: 0.82rem; color: var(--subtext); margin-bottom: 10px;">${t.desc}</div>
      <div>
        ${isClaimed 
          ? '<button class="action-btn secondary" disabled style="padding: 8px 14px; font-size: 0.85rem; width: auto;">Aktywny ✓</button>'
          : `<button class="action-btn" style="padding: 8px 14px; font-size: 0.85rem; width: auto;" ${!isUnlocked ? "disabled" : ""} onclick="claimPassTier(${t.tier})">Odbierz nagrodę</button>`
        }
      </div>
    `;
    container.appendChild(card);
  });

  renderMenuCustomizers();
}

function claimPassTier(tierNum) {
  if (!userStats.claimedTiers) userStats.claimedTiers = [];
  if (userStats.claimedTiers.includes(tierNum)) return;

  userStats.claimedTiers.push(tierNum);
  localStorage.setItem(getUserDataKey("claimed_tiers"), JSON.stringify(userStats.claimedTiers));

  if (tierNum === 2) {
    userStats.elo += 100;
    localStorage.setItem(getUserDataKey("elo"), userStats.elo);
  }

  playSound("win");
  updateTopBarUI();
  renderPass();
  renderQuests();
}

function renderMenuCustomizers() {
  const colorBox = document.getElementById("customizer-color-box");
  const bgBox = document.getElementById("customizer-bg-box");

  if (colorBox) {
    colorBox.style.display = (userStats.claimedTiers && userStats.claimedTiers.includes(1)) ? "block" : "none";
  }
  if (bgBox) {
    bgBox.style.display = (userStats.claimedTiers && userStats.claimedTiers.includes(4)) ? "block" : "none";
  }
}

let currentFlow = "quiz";
let activeQuestions = [];
let currentQIndex = 0;
let hearts = 3;
let correctAnswersCount = 0;
let questionTimer = null;
let questionSeconds = 0;
let totalQuizSeconds = 0;
let selectedOption = null;
let isAnswerChecked = false;
let currentTopicKey = "";
let currentQuizCorrectCombo = 0;

function openSubjectSelector(mode) {
  currentFlow = mode;
  hideAllViews();
  document.getElementById("view-subject-picker").style.display = "flex";

  const title = document.getElementById("subject-picker-title");
  const sub = document.getElementById("subject-picker-subtitle");
  if (mode === "study") {
    title.textContent = "📖 Nauka i Teoria";
    sub.textContent = "Wybierz przedmiot, aby poznać reguły i przykłady:";
  } else {
    title.textContent = "🎯 Wybierz Przedmiot do Ćwiczeń";
    sub.textContent = "Kliknij w przedmiot, aby wejść do jego tematów:";
  }
}

function selectSubjectAndGoToTopics(subjectKey) {
  currentSubject = subjectKey;
  hideAllViews();
  document.getElementById("view-topic-picker").style.display = "flex";

  const sData = subjectsData[currentSubject];
  const title = document.getElementById("picker-title");
  const sub = document.getElementById("picker-subtitle");

  title.textContent = `${sData.icon} ${sData.name}`;
  sub.textContent = currentFlow === 'study' 
    ? "Wybierz temat do nauki teorii:" 
    : "Wybierz dział zadań lub uruchom pełny Test BOSS:";

  const listContainer = document.getElementById("topic-selection-list");
  listContainer.innerHTML = "";

  sData.topics.forEach(t => {
    const card = document.createElement("div");
    card.className = "topic-select-card";
    card.onclick = () => selectTopicAndProceed(t.id);
    card.innerHTML = `
      <div>
        <div class="topic-title">${t.title}</div>
        <div class="topic-desc">${t.desc}</div>
      </div>
      <span style="font-size: 1.2rem;">➔</span>
    `;
    listContainer.appendChild(card);
  });

  const bossBtnContainer = document.getElementById("boss-btn-container");
  if (currentFlow === 'quiz') {
    bossBtnContainer.style.display = "block";
    document.getElementById("boss-btn-title").textContent = `👑 Test BOSS: Wszystkie tematy (${sData.name})`;
  } else {
    bossBtnContainer.style.display = "none";
  }
}

function selectTopicAndProceed(topicKey) {
  currentTopicKey = topicKey;
  if (currentFlow === "study") {
    showStudyScreen(topicKey);
  } else {
    startQuiz(topicKey, false);
  }
}

function showStudyScreen(topicKey) {
  hideAllViews();
  document.getElementById("view-study").style.display = "flex";

  const data = subjectsData[currentSubject].study[topicKey];
  document.getElementById("study-tag").textContent = `${subjectsData[currentSubject].name} • ${data.title}`;
  document.getElementById("study-content").innerHTML = data.html;

  document.getElementById("study-to-quiz-btn").onclick = () => {
    currentFlow = "quiz";
    startQuiz(topicKey, false);
  };
}

function startBossTest() {
  currentTopicKey = "boss";
  updateQuestProgress("boss_try", 1);
  startQuiz("boss", true);
}

function startQuiz(topicKey, isBoss) {
  hideAllViews();
  document.getElementById("view-quiz").style.display = "flex";

  hearts = cheats.infiniteHearts ? Infinity : (isBoss ? 5 : 3);
  document.getElementById("hearts-count").textContent = cheats.infiniteHearts ? "∞" : hearts;
  currentQIndex = 0;
  correctAnswersCount = 0;
  currentQuizCorrectCombo = 0;
  totalQuizSeconds = 0;

  const sQuestions = subjectsData[currentSubject].questions;

  if (isBoss) {
    activeQuestions = [];
    Object.keys(sQuestions).forEach(key => {
      activeQuestions.push(...sQuestions[key]);
    });
  } else {
    activeQuestions = [...sQuestions[topicKey]];
  }

  for (let i = activeQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [activeQuestions[i], activeQuestions[j]] = [activeQuestions[j], activeQuestions[i]];
  }

  const ttsBtn = document.getElementById("tts-btn");
  if (ttsBtn) {
    ttsBtn.style.display = currentSubject === "german" ? "inline-flex" : "none";
  }

  loadQuestion();
}

function loadQuestion() {
  clearInterval(questionTimer);
  questionSeconds = 0;
  document.getElementById("question-time").textContent = questionSeconds;

  const progressPercent = (currentQIndex / activeQuestions.length) * 100;
  document.getElementById("quiz-progress-bar").style.width = `${progressPercent}%`;

  questionTimer = setInterval(() => {
    questionSeconds++;
    totalQuizSeconds++;
    document.getElementById("question-time").textContent = questionSeconds;
  }, 1000);

  const q = activeQuestions[currentQIndex];
  document.getElementById("quiz-category-tag").textContent = 
    `${currentTopicKey === 'boss' ? '👑 BOSS TEST' : 'ZADANIE'} (${currentQIndex + 1}/${activeQuestions.length})`;
  document.getElementById("prompt-text").textContent = q.prompt;

  const container = document.getElementById("options-container");
  container.innerHTML = "";
  selectedOption = null;
  isAnswerChecked = false;
  
  const submitBtn = document.getElementById("submit-btn");
  submitBtn.disabled = true;
  submitBtn.textContent = "Sprawdź";
  
  const feedback = document.getElementById("feedback");
  feedback.className = "feedback-box";
  feedback.textContent = "";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.onclick = () => selectOption(idx, btn);
    container.appendChild(btn);
  });

  const hintBtn = document.getElementById("quiz-hint-btn");
  if (hintBtn) {
    hintBtn.style.display = settingsConfig.hintsEnabled ? "inline-block" : "none";
    hintBtn.disabled = false;
  }
}

function useHint() {
  const hintBtn = document.getElementById("quiz-hint-btn");
  if (isAnswerChecked || !hintBtn) return;

  const q = activeQuestions[currentQIndex];
  const buttons = document.querySelectorAll(".option-btn");
  
  let removed = 0;
  buttons.forEach((btn, idx) => {
    if (idx !== q.answer && removed < 2 && btn.style.visibility !== "hidden") {
      btn.style.opacity = "0.2";
      btn.disabled = true;
      removed++;
    }
  });

  hintBtn.disabled = true;
}

function selectOption(index, btnElement) {
  if (isAnswerChecked) return;
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(b => b.classList.remove("selected"));

  btnElement.classList.add("selected");
  selectedOption = index;
  document.getElementById("submit-btn").disabled = false;
}

document.getElementById("submit-btn").addEventListener("click", () => {
  if (!isAnswerChecked) {
    checkAnswer();
  } else {
    nextQuestion();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const submitBtn = document.getElementById("submit-btn");
    if (!submitBtn.disabled && document.getElementById("view-quiz").style.display === "flex") {
      submitBtn.click();
    }
  }
});

function checkAnswer() {
  isAnswerChecked = true;
  clearInterval(questionTimer);

  const q = activeQuestions[currentQIndex];
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(b => b.disabled = true);

  const feedback = document.getElementById("feedback");
  const hintBtn = document.getElementById("quiz-hint-btn");
  if (hintBtn) hintBtn.disabled = true;
  
  updateQuestProgress("answers", 1);
  if (currentSubject === "german") updateQuestProgress("german_answers", 1);
  if (currentSubject === "math") updateQuestProgress("math_answers", 1);

  if (selectedOption === q.answer) {
    correctAnswersCount++;
    currentQuizCorrectCombo++;
    updateQuestProgress("streak", currentQuizCorrectCombo);
    playSound('correct');
    buttons[selectedOption].classList.remove("selected");
    buttons[selectedOption].classList.add("correct");
    feedback.className = "feedback-box correct";
    feedback.textContent = "Dobrze! Znakomita robota.";
  } else {
    currentQuizCorrectCombo = 0;
    playSound('wrong');
    buttons[selectedOption].classList.remove("selected");
    buttons[selectedOption].classList.add("wrong");
    buttons[q.answer].classList.add("correct");
    feedback.className = "feedback-box wrong";
    feedback.textContent = `Prawidłowa odpowiedź: ${q.options[q.answer]}`;

    if (!cheats.infiniteHearts) {
      hearts--;
      document.getElementById("hearts-count").textContent = hearts;
      if (hearts <= 0) {
        endQuiz(false);
        return;
      }
    }
  }

  document.getElementById("submit-btn").textContent = "Dalej (Enter)";
}

function nextQuestion() {
  currentQIndex++;
  if (currentQIndex >= activeQuestions.length) {
    endQuiz(true);
  } else {
    loadQuestion();
  }
}

function endQuiz(completed) {
  clearInterval(questionTimer);
  document.getElementById("quiz-progress-bar").style.width = "100%";
  document.getElementById("view-quiz").style.display = "none";
  document.getElementById("view-end").style.display = "flex";

  const total = activeQuestions.length;
  const percent = Math.round((correctAnswersCount / total) * 100);
  document.getElementById("end-percent").textContent = `${percent}%`;

  const eloChange = calculateEloGain(correctAnswersCount, total, totalQuizSeconds);
  const eloDiffEl = document.getElementById("end-elo-diff");
  eloDiffEl.textContent = eloChange >= 0 ? `+${eloChange} ELO` : `${eloChange} ELO`;
  eloDiffEl.style.color = eloChange >= 0 ? "var(--primary)" : "var(--error)";

  const title = document.getElementById("end-title");
  const sub = document.getElementById("end-subtitle");

  if (completed) {
    updateQuestProgress("any_quiz", 1);
    if (currentSubject === "german") updateQuestProgress("german_quiz", 1);
    if (currentSubject === "math") updateQuestProgress("math_quiz", 1);

    if (currentTopicKey === "boss") {
      updateQuestProgress("boss", 1);
      if (currentSubject === "german") updateQuestProgress("boss_german", 1);
      if (currentSubject === "math") updateQuestProgress("boss_math", 1);
    }
    if (totalQuizSeconds < 60) updateQuestProgress("speed_60", 1);
    if (totalQuizSeconds < 45) updateQuestProgress("speed_45", 1);

    playSound('win');
    title.textContent = currentTopicKey === "boss" ? "👑 BOSS POKONANY!" : "Quest ukończony!";
    sub.textContent = `Poprawne: ${correctAnswersCount}/${total} w czasie ${totalQuizSeconds}s.`;
    checkDailyStreak();
  } else {
    title.textContent = "Koniec gry (Brak serc)";
    sub.textContent = `Udało się rozwiązać ${correctAnswersCount}/${total} pytań przed utratą żyć.`;
  }
}

function restartCurrentQuiz() {
  if (currentTopicKey === "boss") startBossTest();
  else startQuiz(currentTopicKey, false);
}

function hideAllViews() {
  const views = [
    "view-game", "view-subject-picker", "view-topic-picker", 
    "view-study", "view-quiz", "view-end", "view-quests", 
    "view-pass", "view-menu"
  ];
  views.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });
}

function switchTab(tabId) {
  document.querySelectorAll(".nav-tab-btn").forEach(b => b.classList.remove("active"));
  hideAllViews();

  if (tabId === "game") {
    document.getElementById("tab-game").classList.add("active");
    document.getElementById("view-game").style.display = "flex";
  } else if (tabId === "knowledge") {
    document.getElementById("tab-knowledge").classList.add("active");
    openSubjectSelector("study");
  } else if (tabId === "quests") {
    document.getElementById("tab-quests").classList.add("active");
    document.getElementById("view-quests").style.display = "flex";
    renderQuests();
  } else if (tabId === "pass") {
    document.getElementById("tab-pass").classList.add("active");
    document.getElementById("view-pass").style.display = "flex";
    renderPass();
  } else if (tabId === "menu") {
    document.getElementById("tab-menu").classList.add("active");
    document.getElementById("view-menu").style.display = "flex";
    renderMenuCustomizers();
  }
}

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(freq, type, duration, delay = 0) {
  setTimeout(() => {
    try {
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }, delay);
}

function playSound(type) {
  if (type === 'correct') {
    playTone(523.25, 'sine', 0.12, 0);
    playTone(659.25, 'sine', 0.18, 100);
  } else if (type === 'wrong') {
    playTone(220, 'triangle', 0.2, 0);
    playTone(180, 'triangle', 0.25, 120);
  } else if (type === 'win') {
    playTone(440, 'sine', 0.1, 0);
    playTone(554.37, 'sine', 0.1, 100);
    playTone(659.25, 'sine', 0.25, 200);
  }
}

function speakCurrentPrompt() {
  if (!('speechSynthesis' in window)) return;
  const q = activeQuestions[currentQIndex];
  if (!q) return;

  if (currentSubject === "german") {
    let text = q.prompt.replace(/Uzupełnij:|Co oznacza słowo:|Co oznacza:|Jak powiesz po niemiecku:|Jak powiesz:|Przetłumacz:/gi, "").trim();
    text = text.replace(/_+/g, " ");

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
}

function calculateEloGain(correct, total, totalSeconds) {
  const accuracy = correct / total;
  const avgTimePerQuestion = totalSeconds / total;
  let delta = Math.round((accuracy - 0.5) * 40);

  if (accuracy >= 0.7) {
    if (avgTimePerQuestion < 3.5) delta += 10;
    else if (avgTimePerQuestion < 5.5) delta += 5;
  }

  if (delta < -25) delta = -25;
  if (delta > 35) delta = 35;

  userStats.elo = Math.max(500, userStats.elo + delta);
  userStats.totalAnswers += total;
  localStorage.setItem(getUserDataKey("elo"), userStats.elo);
  localStorage.setItem(getUserDataKey("answers"), userStats.totalAnswers);
  updateTopBarUI();
  return delta;
}

function checkSplashAnimation() {
  if (userStats.claimedTiers && userStats.claimedTiers.includes(5)) {
    const splash = document.getElementById("app-splash-screen");
    if (splash) {
      splash.style.display = "flex";
      setTimeout(() => {
        splash.style.opacity = "0";
        setTimeout(() => splash.style.display = "none", 400);
      }, 1100);
    }
  }
}

const settingsModal = document.getElementById("settings-modal");
document.getElementById("settings-open-btn").addEventListener("click", () => {
  document.getElementById("setting-darkmode").checked = document.body.classList.contains("dark-mode");
  document.getElementById("setting-hints").checked = settingsConfig.hintsEnabled;
  settingsModal.style.display = "flex";
});

document.getElementById("settings-close-btn").addEventListener("click", () => {
  settingsModal.style.display = "none";
});

document.getElementById("setting-darkmode").addEventListener("change", (e) => {
  if (e.target.checked) document.body.classList.add("dark-mode");
  else document.body.classList.remove("dark-mode");
  localStorage.setItem("menli_darkmode", e.target.checked);
});

document.getElementById("setting-hints").addEventListener("change", (e) => {
  settingsConfig.hintsEnabled = e.target.checked;
  localStorage.setItem("menli_hints_enabled", e.target.checked);
});

function unlockTerminal() {
  const pass = document.getElementById("terminal-password-input").value.trim();
  const errorMsg = document.getElementById("terminal-auth-error");
  
  if (pass === "a1b2c3") {
    document.getElementById("terminal-auth-box").style.display = "none";
    document.getElementById("terminal-window").style.display = "flex";
    errorMsg.textContent = "";
    printTerminalOutput("Pomyślnie zalogowano do Menli Dev Console v1.0.");
    printTerminalOutput("Wpisz 'help', aby zobaczyć listę komend.");
  } else {
    errorMsg.textContent = "Nieprawidłowe hasło dostępu!";
  }
}

function printTerminalOutput(text, isCommand = false) {
  const log = document.getElementById("terminal-logs");
  const line = document.createElement("div");
  line.style.marginBottom = "4px";
  line.style.color = isCommand ? "var(--secondary)" : "#a5b4bc";
  line.textContent = isCommand ? `> ${text}` : text;
  log.appendChild(line);
  log.scrollTop = log.scrollHeight;
}

function executeTerminalCommand(cmdText) {
  cmdText = cmdText.trim();
  if (!cmdText) return;

  printTerminalOutput(cmdText, true);
  const parts = cmdText.split(" ");
  const command = parts[0].toLowerCase();
  const value = parseInt(parts[1], 10);

  switch (command) {
    case "elo":
      if (isNaN(value)) {
        printTerminalOutput("Użycie: elo <wartość>, np. elo 2500");
      } else {
        userStats.elo = Math.max(0, value);
        localStorage.setItem(getUserDataKey("elo"), userStats.elo);
        updateTopBarUI();
        printTerminalOutput(`Ustawiono ELO na: ${userStats.elo}`);
      }
      break;

    case "xp":
      if (isNaN(value)) {
        printTerminalOutput("Użycie: xp <wartość>, np. xp 500");
      } else {
        userStats.passXp = Math.max(0, value);
        localStorage.setItem(getUserDataKey("pass_xp"), userStats.passXp);
        renderPass();
        printTerminalOutput(`Ustawiono XP Pass na: ${userStats.passXp}`);
      }
      break;

    case "godmode":
      cheats.infiniteHearts = !cheats.infiniteHearts;
      const countEl = document.getElementById("hearts-count");
      if (countEl) countEl.textContent = cheats.infiniteHearts ? "∞" : hearts;
      printTerminalOutput(`Nieskończone życia: ${cheats.infiniteHearts ? "WŁĄCZONE (∞)" : "WYŁĄCZONE"}`);
      break;

    case "help":
      printTerminalOutput("Dostępne komendy:");
      printTerminalOutput("• elo <wartość>   - Ustawia Twój ranking ELO");
      printTerminalOutput("• xp <wartość>    - Ustawia punkty Menli Pass XP");
      printTerminalOutput("• godmode         - Przełącza nieskończone życia (∞)");
      printTerminalOutput("• clear           - Czyści ekran konsoli");
      break;

    case "clear":
      document.getElementById("terminal-logs").innerHTML = "";
      break;

    default:
      printTerminalOutput(`Nieznana komenda: '${command}'. Wpisz 'help' po listę.`);
      break;
  }
}

document.getElementById("terminal-input")?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    executeTerminalCommand(e.target.value);
    e.target.value = "";
  }
});

updateTopBarUI();
initQuests();
initAuthUI();
checkSplashAnimation();