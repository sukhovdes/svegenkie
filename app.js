const app = document.getElementById('app');

const routes = {
    home: {
        title: 'Привет 👋, @Maxim',
        content: `
            <div class="menu">
                <div class="menu-item" onclick="navigate('rules')">
                    <div class="menu-item-text">📘 Наши правила</div>
                </div>
                <div class="menu-item" onclick="navigate('activities')">
                    <div class="menu-item-text">🔥 Активности</div>
                </div>
                <div class="menu-item" onclick="navigate('friends')">
                    <div class="menu-item-text">Наши друзья</div>
                </div>
            </div>
        `
    },
    rules: {
        title: '📘 Наши правила',
        content: `
            <div class="content">
                <ol>
                    <li>Знакомство: Салют! Давайте знакомиться — расскажите немного о себе и своём канале <a href="https://t.me/svejenkiy_channel/18" target="_blank">тут</a></li>
                    <li>Респект: Общаемся культурно и без негатива, договорились?</li>
                    <li>Конструктивная критика: Если есть что сказать, говорим по делу и только с целью помочь друг другу развиваться.</li>
                    <li>Спам — мимо: Рекламу и спам оставляем за бортом, если это не согласовано с админами.</li>
                    <li>Поддержка: Делимся опытом и полезными фишками, чтобы каждый мог расти и развиваться.</li>
                    <li>Идеи на улучшение: Есть предложения по улучшению чата? Пишите администраторам — ваши идеи важны!</li>
                </ol>
            </div>
        `
    },
    activities: {
        title: '🔥 Активности',
        content: `
            <div class="content">
                <ul>
                    <li>Знакомство: Салют! Давайте знакомиться — расскажите немного о себе и своём канале тут</li>
                    <li>Респект: Общаемся культурно и без негатива, договорились?</li>
                    <li>Конструктивная критика: Если есть что сказать, говорим по делу и только с целью помочь друг другу развиваться.</li>
                    <li>Спам — мимо: Рекламу и спам оставляем за бортом, если это не согласовано с админами.</li>
                    <li>Поддержка: Делимся опытом и полезными фишками, чтобы каждый мог расти и развиваться.</li>
                    <li>Идеи на улучшение: Есть предложения по улучшению чата? Пишите администраторам — ваши идеи важны!</li>
                </ul>
            </div>
        `
    },
    friends: {
        title: 'Наши друзья',
        content: `
            <div class="content">
                <p>Страница в разработке...</p>
            </div>
        `
    }
};

function navigate(route) {
    const page = routes[route];
    if (!page) return;

    const backButton = route !== 'home' ? `
        <div class="back-button" onclick="navigate('home')">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Назад
        </div>
    ` : '';

    app.innerHTML = `
        <div class="container">
            ${backButton}
            <h1 class="${route === 'home' ? 'title' : 'page-title'}">${page.title}</h1>
            ${page.content}
        </div>
    `;
}

// Initialize with home page
navigate('home'); 