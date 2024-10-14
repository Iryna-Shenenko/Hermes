import { sendMessageAPI } from './work-together-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.css';

// Отримання елементів форми і модального вікна
const form = document.querySelector('.contact-form');
const modal = document.querySelector('.modal-wt');
const closeBtn = document.querySelector('.work-btn');

let formData = {};

// Обробка форми
async function handleFormSbmt(event) {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки

    // Збір даних із форми
    formData = {
        email: form.elements['user-email'].value,
        comment: form.elements['message-description'].value,
    };

    // Валідація форми (перевіряємо, чи заповнено email)
    if (!formData.email || !formData.comment) {
        showErrorToast('Please fill in all required fields.');
        return;
    }

    try {
        const response = await sendMessageAPI(formData); // Відправка запиту до API

        if (!response) {
            showErrorToast('Error: Server did not return a response.');
        } else {
            showSuccessModal(); // Показуємо модальне вікно
            form.reset(); // Очищуємо форму після успішної відправки
        }
    } catch (error) {
        showErrorToast('Server error occurred. Please try again.');
    }
}

// Функція для показу повідомлення про помилку
function showErrorToast(message) {
    iziToast.error({
        message: message,
        color: 'white',
        backgroundColor: 'red',
    });
}

// Функція для показу успішного модального вікна
function showSuccessModal() {
    modal.classList.add('is-open');
}

// Функція для закриття модального вікна
function closeModalWindow(event) {
   if (event.target === modal || closeBtn.contains(event.target) || event.key === 'Escape') {
    modal.classList.remove('is-open');
}
}

// Прив'язуємо обробники подій
function bindEvents() {
    form.addEventListener('submit', handleFormSbmt);
    closeBtn.addEventListener('click', closeModalWindow);
    modal.addEventListener('click', closeModalWindow);
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModalWindow(event);
        }
    });
}

// Ініціалізуємо події
bindEvents();
