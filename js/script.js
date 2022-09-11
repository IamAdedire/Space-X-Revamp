const toggleBtn = document.querySelector('.menu-toggle');
const overlay = document.querySelector("#menu-overlay");
const mobileMenu = document.querySelector('.mobile-menu');
const counters = document.querySelectorAll('.stats span');
let scrollStarted = false;





document.addEventListener('scroll', scrollPage);
toggleBtn.addEventListener('click', menuToggle);
document.addEventListener('click', closeMenu);





function closeMenu(e){
    if (toggleBtn.classList.contains('is-active') && e.target == overlay) {
            menuToggle();
    }
}

function menuToggle(e) {
    // console.log(e.target);
    toggleBtn.classList.toggle('is-active');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    mobileMenu.classList.toggle('menu-open');
}

function scrollPage() {
    // console.log(window.scrollY);
    if (window.scrollY > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if(window.scrollY < 100 && scrollStarted) {
        reset();
        scrollStarted = false;
    }
}

// function countUp() {
//     for(counter of counters) {
//         // Get target value
//         let target = +counter.getAttribute('data-target');
//         // console.log(target);

//         // Get counter initial value
//         let count = +counter.innerHTML;
//         // console.log(count);

//         if (count < target) {
//             counter.innerText = `${count + 1}`;

//             setTimeout(countUp, 75);
//         } else {
//             counter.innerText = target;
//         }
//     }
// }

function countUp() {
    counters.forEach((counter) => {

        counter.innerText = '0';

        const updateCount = () => {
            // Get target value
            const target = +counter.getAttribute('data-target');

            // Get counter initial value
            const count = +counter.innerHTML;

            // Create increment
            const increment = target / 100;

            if (count < target) {
                counter.innerText = `${count + 1}`;
                // counter.innerText = `${Math.ceil(count + increment)}`;

                setTimeout(updateCount, 75);
            } 
            else {
                counter.innerText = target;
            }
        }

        updateCount();
    })
}

function reset() {
    counters.forEach((counter) => counter.innerText = '0')
}
