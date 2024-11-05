const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior
    
            // Get the target section by ID
            const targetSection = document.querySelector(this.getAttribute('href'));
    
            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}