(function(){
    let currentSlide = 1;
    const mainArea = document.querySelector('.main__container');
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
    let line;
    let secondLine;
 
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

        const prevSlide = currentSlide;

        if(currentSlide < slidesAmount) {
            line.animate((1/slidesAmount) * (currentSlide + 1));
        }

        if(currentSlide < slidesAmount) {
            currentSlide++;    
            console.log(currentSlide);
            slides[prevSlide - 1].classList.add('used');
            slides[currentSlide - 1].classList.remove('hidden');
            setTimeout(()=> { 
                carouselArea.style.minHeight ='0px';
                carouselArea.style.minHeight = slides[currentSlide - 1].clientHeight+'px';
            }, 300);
            button.classList.remove('active');
        } else if (currentSlide === slidesAmount - 1){
            const w = window.innerWidth;
            if(w < 769){
                setTimeout(()=> {
                    carouselArea.style.minHeight ='0px';
                    const h = slides[currentSlide - 1].clientHeight + 110;
                    console.log(h);
                    carouselArea.style.minHeight = 'px';
                }, 300) 
            } else {
                setTimeout(()=> {
                    carouselArea.style.minHeight ='0px';
                    const h = slides[currentSlide - 1].clientHeight + 132;
                    console.log(h);
                    carouselArea.style.minHeight = 'px';
                }, 300) 
            }
        } else if (currentSlide === slidesAmount) {
            slides[prevSlide - 1].classList.add('used');
            button.classList.remove('active');
            prog.classList.remove('active');
            line = '';
            adder();
        }
    }

    function disableAreasAndAddProbressbar() {
        text.classList.add('disabled');
        title.classList.add('disabled');
        backgruond.classList.add('disabled');
        prog.classList.add('active');
        line = new ProgressBar.Line('#progressbar', {
            color: '#B53E42',
            trailWidth: 8,
            trailColor: '#F3F4F8',
            duration: 1000,
            easing: 'linear'
        });
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

    function adder() {
        mainArea.innerHTML =`
            <h2 class="main__processing">Обработка Ваших данных:</h2>
            <div class="main__processbar" id="processbar"></div>
            <div class="main__information">
                <p class="main__load">Анализ введенных данных . . . . . . . <span>Выполнено!</span></p>
                <p class="main__load">Коррекция астрологического знака . . . . . . . <span>Выполнено!</span></p>
                <p class="main__load">Расчет вариаций ответов . . . . . . . <span>Выполнено!</span></p>
                <p class="main__load">Генерация предсказания . . . . . . . <span>Выполнено!</span></p>
                <p class="main__load">Сохранение результата . . . . . . . <span>Выполнено!</span></p>
                <p class="main__load">Поиск свободного оператора . . . . . . . <span>Выполнено!</span></p>
                <p class="main__load">Начала озвучки и записи аудио-сообщения . . . . . . . <span class="red">Идёт запись!</span></p>
                <p class="main__finish"></p>
            </div>
        `
        secondLine = new ProgressBar.Line('#processbar', {
            color: '#419330',
            strokeWidth: 7,
            trailWidth: 7,
            trailColor: '#F3F4F8',
            duration: 10000,
            easing: 'linear',
            text: {
                value: '0',
                style: {
                    color: '#FFFFFF',
                    position: 'absolute',
                    top: '14.8px',
                    left: '20px',
                    fontSize: '14px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
            }, step: function(state, bar) {
                bar.setText((Math.round(bar.value() * 100) + ' %'));
            }
        });
        secondLine.animate(1)
        setTimeout(()=> {
            document.querySelector('.main__finish').innerHTML = 'Готово!';
        }, 10100)
        setTimeout(()=> {
            secondLine = '';
            mainArea.innerHTML = `All done`
        }, 11500)
    }
})();