const tg = window.Telegram.WebApp;
tg.expand();

const user = tg.initDataUnsafe.user;

document.getElementById("user-info").innerText =
  `Ты зашел как ${user?.first_name || "гость"}`;

function sendGreeting() {
  tg.showAlert(`Приятно познакомиться, ${user?.first_name || "незнакомец"}!`);
}
