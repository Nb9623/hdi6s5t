// Автоматическое переключение слайдов каждые 3 секунды
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
    // Скрываем предыдущий активный слайд
    slides[currentSlide].classList.remove('active-slide');
    
    // Переход к следующему слайду
    currentSlide++;
    if(currentSlide >= slides.length){
        currentSlide = 0;
    }
    
    // Показываем новый активный слайд
    slides[currentSlide].classList.add('active-slide');
}, 3000); // Интервал смены слайда (в миллисекундах)


document.getElementById("loginBtn").addEventListener("click", function() {
    document.getElementById("loginModal").style.display = "block";
});

document.getElementById("registerBtn").addEventListener("click", function() {
    document.getElementById("registerModal").style.display = "block";
});

// Функция закрытия окна (можно добавить крестик закрытия позже)
window.onclick = function(event) {
    var modals = document.getElementsByClassName("modal");
    Array.from(modals).forEach(function(modal) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};