const burger = document.querySelector('.humburger-menu')
const menuElement = document.querySelector('.menu')
const menuList = document.querySelector('.menu-list')

const toggleMenu = () => {
    burger.classList.toggle('humburger-menu-active');
    menuElement.classList.toggle('menu-active');

    menuList.addEventListener('click', (e) => {

        if(e.target.classList.contains('menu-list__link')){
            burger.classList.remove('humburger-menu-active');
            menuElement.classList.remove('menu-active')
        };
    });
};

burger.addEventListener('click', toggleMenu);
