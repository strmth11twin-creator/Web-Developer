const btn = document.querySelector("[data-btn]");
const hiddenElements = document.querySelectorAll(".hidden");
const openModalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    })
})

hiddenElements.forEach(el => observer.observe(el));

btn.addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector("#projects").scrollIntoView({behavior: "smooth"})
})

openModalBtn.addEventListener("click", () => {
    modal.classList.add("show")
})

closeBtn.addEventListener("click", () => {
    modal.classList.remove("show")
})

