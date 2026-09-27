const startBtn = document.getElementById('start-btn');
        const videoContainer = document.getElementById('video-container');
        const video = document.getElementById('start-video');
        const skipBtn = document.getElementById('skip-btn');

        // URL страницы, на которую нужно перенаправить пользователя
        const nextPageUrl = 'Start.html';

        // Функция для перехода на следующую страницу
        function navigateToNextPage() {
            window.location.href = nextPageUrl;
        }

        // 1. Нажатие на кнопку Старт
        startBtn.addEventListener('click', () => {
            startBtn.style.display = 'none'; // Скрываем кнопку Старт
            videoContainer.style.display = 'block'; // Показываем контейнер с видео
            video.play().catch(error => {
                console.log("Автовоспроизведение заблокировано браузером:", error);
            });
        });

        // 2. Нажатие на кнопку Пропустить
        skipBtn.addEventListener('click', navigateToNextPage);

        // 3. Окончание видео
        video.addEventListener('ended', navigateToNextPage);