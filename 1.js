document.querySelectorAll('.topnav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function dark_mode() {
    document.body.classList.toggle('dark_mode');
}


const pageIdentifier = 'blogPage1';

