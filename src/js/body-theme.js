const theme = {
  light: 'light-theme',
  dark: 'dark-theme',
};

const themeInput = document.querySelector('.theme-switch__toggle');
const modalMenu = document.querySelector('.menu-header');
const bodyColor = document.querySelector('body');

const checkLs = localStorage.getItem('theme');

if (checkLs) {
    bodyColor.classList.add(checkLs);
    modalMenu.classList.add(checkLs); // Додаємо клас для модального вікна
} else {
    bodyColor.classList.add(theme.light);
    modalMenu.classList.add(theme.light); // Додаємо клас для модального вікна за замовчуванням
};

// Перевірка чекбоксу на темну тему
if (checkLs === theme.dark) {
    themeInput.checked = true;
};

// Зміна теми
const handleColor = (event) => {
    if (event.currentTarget.checked) {
        // Light-theme
        bodyColor.classList.remove(theme.light);
        bodyColor.classList.add(theme.dark);
        modalMenu.classList.remove(theme.light);  // Змінюємо тему для модального вікна
        modalMenu.classList.add(theme.dark);
        localStorage.setItem('theme', theme.dark);
    } else {
        // Dark-theme
        bodyColor.classList.remove(theme.dark);
        bodyColor.classList.add(theme.light);
        modalMenu.classList.remove(theme.dark);  // Змінюємо тему для модального вікна
        modalMenu.classList.add(theme.light);
        localStorage.setItem('theme', theme.light);
    }
};

// Додаємо обробник на перемикач теми
themeInput.addEventListener('change', handleColor);