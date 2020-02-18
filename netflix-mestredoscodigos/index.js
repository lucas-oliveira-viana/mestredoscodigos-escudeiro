const carousel_items = [
    {
        name: 'Brooklyn Nine-Nine',
        img: 'img/items/item1.png'
    },
    {
        name: 'The Seven Deadly Sins',
        img: 'img/items/item2.jpg'
    },
    {
        name: 'Cavaleiros do Zodiaco',
        img: 'img/items/item3.png'
    },
    {
        name: 'Naruto',
        img: 'img/items/item4.png'
    },
    {
        name: 'La Casa de Papel',
        img: 'img/items/item5.jpg'
    },
    {
        name: 'Greys Anatomy',
        img: 'img/items/item6.png'
    },
    {
        name: 'The Seven Deadly Sins',
        img: 'img/items/item2.jpg'
    },
    {
        name: 'Cavaleiros do Zodiaco',
        img: 'img/items/item3.png'
    },
    {
        name: 'Naruto',
        img: 'img/items/item4.png'
    },
    {
        name: 'La Casa de Papel',
        img: 'img/items/item5.jpg'
    },
    {
        name: 'Greys Anatomy',
        img: 'img/items/item6.png'
    }
];

const $ = function (selector) {
    return document.querySelectorAll(selector);
}

window.onload = function () {
    (function applyCarouselsBackgrounds() {
        const numberOfItemsByCarousel = $(".carousel__item").length / $(".carousel").length;
        for (let carouselItem = 0; carouselItem < numberOfItemsByCarousel; carouselItem++) {
            applyBackground(carouselItem, 0);
            applyBackground(carouselItem, 1);
        }
    }());

    (function changeNavbarBackgroundOnScroll() {
        window.onscroll = function () {
            const navbar = $('.navbar')[0];
            if (this.scrollY >= 10) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
    }());

    (function actionsButtonOnClickNext() {
        const carouselNext = $(".carousel__move_next");
        for (let [index, element] of carouselNext.entries()) {
            element.addEventListener("click", function () {
                showPreviousButton(index);
                let scrolledElement = $(".carousel__content");
                sideScroll(scrolledElement[index], 'right', 20, 1000, scrolledElement[index].clientWidth);
            });
        };
    }());
    
    (function actionsButtonOnClickPrevious() {
        const carouselPrevious = $(".carousel__move_previous");
        for (let [index, element] of carouselPrevious.entries()) {
            element.addEventListener("click", function () {
                let scrolledElement = $(".carousel__content");
                sideScroll(scrolledElement[index], 'left', 2, 1000, scrolledElement[index].clientWidth);
            });
        };
    }());

    (function actionsOnClickSearch() {
        const navbarSearch = $(".navbar__search")[0]
        const navbarLogoSearch = $(".navbar__logo_search")[0]
        const searchInput = $(".search__input")[0]
        navbarLogoSearch.addEventListener("click", function() {
            navbarSearch.style.width = "220px";
            navbarSearch.style.display = "block";
            navbarSearch.style.border = "1px solid white"
            navbarLogoSearch.style.left = "-192px";
            searchInput.style.opacity = "1"
        })
    }());
}

function showPreviousButton(index) {
    carouselPrevious = $(".carousel__move_previous")[index];
    carouselPrevious.style.display = "grid";
}

function applyBackground(carouselItem, carouselNumber) {
    const element = $(`.carousel__item_${carouselItem}`)[carouselNumber];
    const name = document.createElement('span');
    addNameToItem();
    element.prepend(name)
    addBackgroundToItem();

    function addBackgroundToItem() {
        applyDefaultBackgroundStyle();

        element.addEventListener('mouseover', function () {
            element.style.background = `linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(20, 20, 20, 0.64) 37%), url(${carousel_items[carouselItem].img})`;
            element.style.backgroundRepeat = "no-repeat";
            element.style.backgroundSize = "cover";
        })

        element.addEventListener('mouseleave', function () {
            applyDefaultBackgroundStyle();
        })

        function applyDefaultBackgroundStyle() {
            element.style.background = `url(${carousel_items[carouselItem].img})`;
            element.style.backgroundRepeat = "no-repeat";
            element.style.backgroundSize = "cover";
        }
    }

    function addNameToItem() {
        name.innerHTML = carousel_items[carouselItem].name;
        name.classList.add('item__name');
    }
}

function sideScroll(element, direction, speed, distance, step) {
    scrollQuantity = 0;
    let slideTimer = setInterval(function () {
        if (direction == 'left') {
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollQuantity += step;
        if (scrollQuantity >= distance) {
            window.clearInterval(slideTimer);
        }
    }, speed);
}