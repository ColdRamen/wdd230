function toggleMenu() {
    document.getElementById("dropdown-nav").classList.toggle("open");
    document.getElementById("hamburger-btn").classList.toggle("open");
}

const x = document.getElementById("hamburger-btn");

x.onclick = toggleMenu;