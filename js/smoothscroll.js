class SmoothScroll {
    constructor(selector) {
        this.links = document.querySelectorAll(selector);

        this.links.forEach((item) => {

            item.addEventListener('click', (e) => {
                const linkId = e.target.closest('A').getAttribute('href').substr(1);

                window.scrollTo({
                    top: document.getElementById(linkId).offsetTop,
                    behavior: 'smooth',
                });

                e.preventDefault();

            });
        });
    }
}

new SmoothScroll('.menu-list__link');
new SmoothScroll('.main__scroll');
new SmoothScroll('.logo');


// еще вариант

// const lincksHead = document.querySelectorAll('.menu-list__link');
// const miniScroll = document.querySelector('.mini__scroll');
// const linkArray = [...lincksHead, miniScroll];

// linkArray.forEach(link => {
//     link.addEventListener('click', e => {
//         e.preventDefault()

//         const ID = e.target.getAttribute('href').substr(1)
//         document.getElementById(ID).scrollIntoView({
//             behavior: 'smooth',
//             block: 'center',
//         })
//     })
// })
