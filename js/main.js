// const nav = document.querySelector('#nav');
// const navBtn = document.querySelector('#nav-btn');
// const navBtnImg = document.querySelector('#nav-btn-img');

// navBtn.onclick = () => {
//     if (nav.classList.toggle('open')) {
//         navBtnImg.src = "./img/icons/nav-close.svg";
//     } else {
//         navBtnImg.src = './img/icons/nav-open.svg';
//     }
// }

const menuBtn = document.querySelector('.menu__icon')
const menu = document.querySelector('.nav-list')


if (menuBtn && menu) {
    menuBtn.addEventListener('click',() =>{
        menuBtn.classList.toggle('active')
        menu.classList.toggle('active')
    }  ) 
    menu.querySelectorAll('a').forEach(link  =>{
        link.addEventListener('click', () =>{
            menu.classList.toggle('active')
            menuBtn.classList.toggle('active')
        })
    })
}

AOS.init();

const anhors =document.querySelectorAll('a[href*="#"]')
anhors.forEach(anhors => {
    anhors.addEventListener('click', e =>{
        e.preventDefault();

        const blockID = anhors.getAttribute('href').substring(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})