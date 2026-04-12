const btn = document.querySelector("[data-btn]");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector("#projects").scrollIntoView({behavior: "smooth"})
})


