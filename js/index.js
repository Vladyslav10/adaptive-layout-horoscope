(function(){
    let currentSlide = 1;
    const title = document.querySelector('.main__title');
    const text = document.querySelector('.main__text');
    const prog = document.querySelector('.main__progressbar');
    const backgruond = document.querySelector('.main__background');
    const carouselArea = document.querySelector('.carousel');
    const checked = document.querySelectorAll('.carousel__input');
    const slides = document.querySelectorAll('.carousel__item');
    const button = document.querySelector('.carousel__next');
    button.addEventListener('click', chandeSlide);

    checked.forEach(el => {
        el.addEventListener('click', function(){
            button.classList.add('active');
        })
    })

    function chandeSlide() {
        const prevSlide = currentSlide;
        currentSlide++;
        prog.classList.add('active');
        const h = slides[currentSlide - 1].offsetHeight;
        carouselArea.style.minHeight = h+'px';
        carouselArea.style.marginTop = '0px'; 
        slides[prevSlide - 1].classList.add('used');
        slides[currentSlide - 1].classList.remove('hidden');
        text.classList.add('disabled');
        title.classList.add('disabled');
        backgruond.classList.add('disabled');
        button.classList.remove('active');
    }
})();