document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    const burger = document.querySelector('.burger');
    const sidebar = document.querySelector('.sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href") === "#" ? "header" : e.currentTarget.getAttribute("href");
        window.scrollTo({
            top: document.querySelector(targetId).offsetTop,
            behavior: "smooth"
        });

        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    }

    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    sidebarLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    burger.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
});