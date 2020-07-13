const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('ul');
    const navLinks = document.querySelectorAll('li');
    
    burger.addEventListener('click',()=> {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `ulFade 1s ease forwards ${index / 6 + .3}s`;
            }
        });
    });

}

navSlide();

function navhidden() {
    var x = document.getElementById("ul");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  navhidden();