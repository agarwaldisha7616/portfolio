/*Show menu*/
const showMenu = (toggleId, navID) => {
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navID);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show_menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

/*Active and remove menu*/
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*This is for removing menu on click on mobile*/
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show_menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*Auto write text*/

const iAm = document.getElementById('autoWrite');
let index = 0;


const texts = ['Web Developer    ', 'Gym Addict    ', 'Anime Fan    ', 'Gamer    ']

let wordCounter = 0;
let text = texts[wordCounter];


function writeText() {
    iAm.innerText = text.slice(0, index);
    index++;

    if (index > text.length) {
        index = 1;
        wordCounter++;
        text = texts[wordCounter];
        if (wordCounter === 3) {
            wordCounter = 0;
            text = texts[wordCounter];
        }
    }
}

setInterval(writeText, 150);


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home_title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home_img', { delay: 400 });
sr.reveal('.home_social-icon', { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal('.about_img', {});
sr.reveal('.about_subtitle', { delay: 400 });
sr.reveal('.about_text', { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal('.skills_subtitle', {});
sr.reveal('.skills_text', {});
sr.reveal('.skills_data', { interval: 200 });
sr.reveal('.skills_img', { delay: 600 });

/*SCROLL WORK*/
sr.reveal('.work_img', { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal('.contact_input', { interval: 200 });