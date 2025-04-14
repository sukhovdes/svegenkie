const tg = window.Telegram.WebApp;
tg.expand();

const user = tg.initDataUnsafe.user;
document.getElementById("greeting").innerText = `Привет, ${user?.first_name || "гость"}!`;

function openScreen(id) {
  document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goBack() {
  document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
  document.getElementById("main").classList.add('active');
}
