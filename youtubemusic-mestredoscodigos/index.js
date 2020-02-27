const carousel_items = [{
        title: 'Mix de lançamentos',
        sub: 'Atualizada recentemente',
        img: 'img/mix_lancamentos.jpg'
    },
    {
        title: 'Colombiana (Ao Vivo)',
        sub: 'Single • Gustavo Mioto',
        img: 'img/colombiana.jpg'
    },
    {
        title: 'Cumpra-se - EP 2 (Ao Vivo)',
        sub: 'EP • Marcos & Belutti',
        img: 'img/cumpraseep2.jpg'
    },
    {
        title: 'Dulcecitos',
        sub: 'Single • Piso 21',
        img: 'img/dulcecitos.jpg'
    },
    {
        title: 'Maldad',
        sub: 'Single • Steve Aoki e Maluma',
        img: 'img/maldad.jpg'
    },
    {
        title: 'Microphone',
        sub: 'Single • American Authors',
        img: 'img/microphone.jpg'
    },
    {
        title: 'Black Swan',
        sub: 'Single • BTS',
        img: 'img/black_swan.jpg'
    },
    {
        title: 'Youtube Night',
        sub: 'Playlist • Youtube',
        img: 'img/youtubenight.jpg'
    }
]

const $ = function (selector) {
    return document.querySelectorAll(selector);
}

function checkScrollBackground() {
    const navbar = $('.navbar')[0];
    if (this.scrollY >= 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

    const moveQuantity = 1000;
    const carouselMarginWidth = 56;

    window.onload = function () {
        (function applyCarouselsItems() {
            const numberOfItemsByCarousel = $(".carousel__item").length / $(".carousel").length;
            for (let carouselItem = 0; carouselItem < numberOfItemsByCarousel; carouselItem++) {
                applyItemProperties(carouselItem, 0);
                applyItemProperties(carouselItem, 1);
            }
        }());

        function applyItemProperties(carouselItem, carouselNumber) {
            const titleElement = document.createElement('p');
            const subtitleElement = document.createElement('p');

            titleElement.classList.add('item__title', `item__title_${carouselItem}`)
            subtitleElement.classList.add('item__subtitle', `item__subtitle_${carouselItem}`)

            titleElement.innerHTML = carousel_items[carouselItem].title;
            subtitleElement.innerHTML = carousel_items[carouselItem].sub;

            $(`.carousel__item_${carouselItem}`)[carouselNumber].append(titleElement);
            $(`.carousel__item_${carouselItem}`)[carouselNumber].append(subtitleElement);

            const imgElement = $(`.carousel__img_${carouselItem}`)[carouselNumber];
            imgElement.style.background = `url(${carousel_items[carouselItem].img})`;
            imgElement.style.backgroundRepeat = "no-repeat";
            imgElement.style.backgroundSize = "cover";
        }

        checkScrollBackground();

        (function changeNavbarBackgroundOnScroll() {
                window.onscroll = checkScrollBackground
        }());

    (function actionsButtonOnClickNext() {
        const carouselNext = $(".chevron__right");
        for (let [index, element] of carouselNext.entries()) {
            element.addEventListener("click", function () {
                showPreviousButton(index);
                let scrolledElement = $(".carousel__content");

                const screenWidth = scrolledElement[index].clientWidth;
                const fullElementWidth = scrolledElement[index].scrollWidth;

                if (checkIfWillScrollFullInOneClick(screenWidth, moveQuantity, fullElementWidth)) {
                    carouselNext[index].style.display = 'none';
                }

                hideOnNextEndScroll(scrolledElement, index, carouselNext);

                sideScroll(scrolledElement[index], 'right', 20, moveQuantity, scrolledElement[index].clientWidth);
            });
        };
    }());

    (function actionsButtonOnClickPrevious() {
        const carouselPrevious = $(".chevron__left");
        const carouselNext = $(".chevron__right");
        let previousClicks = 0;
        for (let [index, element] of carouselPrevious.entries()) {
            element.addEventListener("click", function () {
                let scrolledElement = $(".carousel__content");

                previousClicks++;

                const screenWidth = scrolledElement[index].clientWidth;
                const fullElementWidth = scrolledElement[index].scrollWidth;
                const isScrollLowerThanScreenWidth = screenWidth > fullElementWidth - (previousClicks * screenWidth);

                if (isScrollLowerThanScreenWidth || checkIfWillScrollFullInOneClick(screenWidth, moveQuantity, fullElementWidth)) {
                    carouselPrevious[index].style.display = 'none';
                    previousClicks = 0;
                }

                if (carouselNext[index].style.display === 'none') {
                    carouselNext[index].style.display = 'block';
                }

                sideScroll(scrolledElement[index], 'left', 2, moveQuantity, screenWidth);
            });
        };
    }());
}

function checkIfWillHideChevrons() {
    const carouselContent = $('.carousel__content');
    const carouselItems = $('.carousel__items');

    let lastChevronIndex = undefined

    for (let index = 0; index < carouselContent.length; index++) {

        let chevronIndexStart = lastChevronIndex + 1 || 0
        let chevronIndexEnd = lastChevronIndex + 2 || 1

        for (let chevronIndex = chevronIndexStart; chevronIndex <= chevronIndexEnd; chevronIndex++) {

            if (carouselContent[index].offsetWidth === carouselItems[index].offsetWidth) {
                $(".chevron")[chevronIndex].style.display = 'none'
            }
        }

        lastChevronIndex = chevronIndexEnd;
    }
};

checkIfWillHideChevrons();

window.addEventListener('resize', function () {
    checkIfWillHideChevrons();
})

function checkIfWillScrollFullInOneClick(screenWidth, moveQuantity, fullElementWidth) {
    return screenWidth + moveQuantity > fullElementWidth + carouselMarginWidth;
}

function hideOnNextEndScroll(scrolledElement, index, carouselNext) {
    const isScrollEnd = scrolledElement[index].clientWidth === scrolledElement[index].scrollLeft;
    if (isScrollEnd) {
        carouselNext[index].style.display = 'none';
    }
}

function showPreviousButton(index) {
    carouselPrevious = $(".chevron__left")[index];
    carouselPrevious.style.display = "block";
}

function sideScroll(element, direction, speed, distance, step) {
    scrollAmount = 0;
    let slideTimer = setInterval(function () {
        if (direction == 'left') {
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
            window.clearInterval(slideTimer);
        }
    }, speed);
}