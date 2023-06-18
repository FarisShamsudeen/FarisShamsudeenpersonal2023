let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}; 



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

// navbar always on top
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);


// remove toggle icon and navbar

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
 
// scroll reveal

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-container, .contact form' ,{ origin: 'bottom' }); 
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
 
// typed multiple text 

const typed = new Typed('.multiple-text',{
    strings: ['a Frontend Developer','a Hafidhul Quran','a Graphic Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
}); 

const types = new Typed('.multiples-texts',{
    strings: ['"The best software developers are those who are always learning." - Steve Jobs','"The Quran is a source of knowledge and wisdom." - Imam al-Ghazali'],
    typeSpeed: 50, 
    backSpeed: 20,
    backDelay: 2000,
    loop: true,
    showCursor: false,
});

// linking with google sheets 

const scriptURL = 'https://script.google.com/macros/s/AKfycbwRBG38ym-kj3o1Vf8WgPBHQnPQsARmgP5IKt_pYwT0dAufiVcom5s0Rbe4u_notAEv/exec'
const form = document.forms['submit-to-google-sheet']
const sent = document.getElementById("sent");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        sent.innerHTML = "Message sent SUCCESSFULLY..."
        setTimeout(function(){
            sent.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})