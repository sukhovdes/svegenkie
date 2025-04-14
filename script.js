const tg = window.Telegram.WebApp;
tg.expand();

const user = tg.initDataUnsafe.user;

const greetingEl = document.getElementById("greeting");
greetingEl.innerText = `Привет, ${user?.first_name || "гость"}!`;
