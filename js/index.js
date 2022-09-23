(function(){
    let currentSlide = 1;
    const title = document.querySelector('.main__title');
    const text = document.querySelector('.main__text');
    const prog = document.querySelector('.main__progressbar');
    const day = document.getElementById('select-day');
    const month = document.getElementById('select-monts');
    const year = document.getElementById('select-year');
    const zodiac = document.querySelector('.carousel__zodiac');
    const backgruond = document.querySelector('.main__background');
    const carouselArea = document.querySelector('.carousel');
    const selects = document.querySelectorAll('.carousel__select-area');
    const message = document.querySelector('.carousel__message');
    const checked = document.querySelectorAll('.carousel__input');
    const slides = document.querySelectorAll('.carousel__item');
    const button = document.querySelector('.carousel__next');
    const slidesAmount = slides.length;
    console.log(slidesAmount);
    let line = new ProgressBar.Line('#progressbar', {
        color: '#B53E42',
        trailWidth: 8,
        trailColor: '#F3F4F8',
        duration: 1000,
        easing: 'linear'
    });
    

    button.addEventListener('click', chandeSlide);

    checked.forEach(el => {
        el.addEventListener('click', function(){
            button.classList.add('active');
        })
    })

    selects.forEach(el => {
        el.addEventListener('change', function () {
            if(day.value === 'День' || month.value === 'Місяць' || year.value === 'Рік') {
                message.classList.add('active');
                message.innerText = 'пожалуйста, выберите ответ';
            } else {
                let choosenDay = day.value;
                let choosenMonth = month.value;
                zodiac.classList.add('active');
                addZodiacImage(Number(choosenDay), Number(choosenMonth));
                message.classList.remove('active');
                button.classList.add('active');
            };
        }) 
    });

    function chandeSlide() {
        if(currentSlide === 1) {
            disableAreasAndAddProbressbar();
        }
        if(currentSlide < slidesAmount - 1) {
            setTimeout(()=> {
                const h = slides[currentSlide - 1].offsetHeight;
                carouselArea.style.minHeight = h+'px';
            }, 300) 
        } else {
            const w = window.innerWidth;
            if(w < 769){
                setTimeout(()=> {
                    const h = slides[currentSlide - 1].offsetHeight + 110;
                    carouselArea.style.minHeight = h+'px';
                }, 300) 
            }else {
                setTimeout(()=> {
                    const h = slides[currentSlide - 1].offsetHeight + 132;
                    carouselArea.style.minHeight = h+'px';
                }, 300) 
            }
            
        }

        line.animate((1/slidesAmount) * (currentSlide + 1));
        const prevSlide = currentSlide;
        currentSlide++;
        slides[prevSlide - 1].classList.add('used');
        slides[currentSlide - 1].classList.remove('hidden');
        button.classList.remove('active');
    }

    function disableAreasAndAddProbressbar() {
        text.classList.add('disabled');
        title.classList.add('disabled');
        backgruond.classList.add('disabled');
        prog.classList.add('active');
    };

    function addZodiacImage(day, month) {
        switch (month) {
            case 1:
                if (day <= 19)
                    zodiac.innerHTML = `<img src="img/zodiac/10_Capricorn.png" alt="Capricorn.png">`;
                else
                    zodiac.innerHTML = `<img src="img/zodiac/11_Aquarius.png" alt="Aquarius">`;
                break;
            case 2:
                if (day <= 18)
                    zodiac.innerHTML = `<img src="img/zodiac/11_Aquarius.png" alt="Aquarius">`;
                else
                    zodiac.innerHTML = `<img src="img/zodiac/12_Pisces.png" alt="Pisces">`;
                break;
            case 3:
                if (day <= 20)
                    zodiac.innerHTML = `<img src="img/zodiac/12_Pisces.png" alt="Pisces">`;
                else
                    zodiac.innerHTML = `<img src="img/zodiac/1_aries.png" alt="Aries">`;
                break;
            case 4:
                if (day <= 19)
                    zodiac.innerHTML = `<img src="img/zodiac/1_aries.png" alt="Aries">`;
                else
                    zodiac.innerHTML = `<img src="img/zodiac/2_Taurus.png" alt="Taurus">`;
                break;
            case 5:
                if (day <= 20)
                    zodiac.innerHTML = `<img src="img/zodiac/2_Taurus.png" alt="Taurus">`;
                else
                    zodiac.innerHTML = `<img src="img/zodiac/3_Gemini.png" alt="Gemini">`;
                break;
            case 6:
                if (day <= 21)
                    zodiac.innerHTML = `<img src="img/zodiac/3_Gemini.png" alt="Gemini">`;
                else
                    zodiac.innerHTML = `<img src="img/zodiac/Cancer_Rak.png" alt="Cancer">`;
                break;
            case 7:
                if (day <= 22)
                    zodiac.innerHTML = `<img src="img/zodiac/Cancer_Rak.png" alt="Cancer">`;
                else
                    zodiac.innerHTML = `<img src="img/zodiac/5_Leo.png" alt="Leo">`;
                break;
            case 8:
                if (day <= 22)
                    zodiac.innerHTML = `<img src="img/zodiac/5_Leo.png" alt="Leo">`;
                else
                    zodiac.innerHTML = `<img src="img/zodiac/6_Virgo.png" alt="Virgio">`;
                break;
            case 9:
                if (day <= 22)
                    zodiac.innerHTML = `<img src="img/zodiac/6_Virgo.png" alt="Virgio">`;
                else
                    zodiac.innerHTML = `<img src="img/zodiac/7_Libra.png" alt="Libra">`;
                break;
            case 10:
                if (day <= 22)
                    zodiac.innerHTML = `<img src="img/zodiac/7_Libra.png" alt="Libra">`;
                else
                    zodiac.innerHTML = `<img src="img/zodiac/8_Scorpio.png" alt="Scorpio">`;
                break;
            case 11:
                if (day <= 22)
                    zodiac.innerHTML = `<img src="img/zodiac/8_Scorpio.png" alt="Scorpio">`;
                else
                    zodiac.innerHTML = `<img src="img/zodiac/9_Sagittarius.png" alt="Sagittarius">`;
                break;
            case 12:
                if (day <= 21)
                    zodiac.innerHTML = `<img src="img/zodiac/9_Sagittarius.png" alt="Sagittarius">`;
                else
                    zodiac.innerHTML = `<img src="img/zodiac/10_Capricorn.png" alt="Capricorn.png">`;
                break;
        }
    }
})();