const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});


// const counters = document.querySelectorAll('.skills__ratings-counter'),
//     lines = document.querySelectorAll('.skills__ratings-line span');

// counters.forEach((item, i) => {
//     lines[i].getElementsByClassName.width = item.innerHTML;
// });


// console.clear();
// const featuresEl = document.querySelector(".skills__items");
// const featureEls = document.querySelectorAll(".skills__item");

// featuresEl.addEventListener("pointermove", (ev) => {
//   featureEls.forEach((featureEl) => {
//     // Not optimized yet, I know
//     const rect = featureEl.getBoundingClientRect();

//     featureEl.style.setProperty("--x", ev.clientX - rect.left);
//     featureEl.style.setProperty("--y", ev.clientY - rect.top);
//   });
// });
