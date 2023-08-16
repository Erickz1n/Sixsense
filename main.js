// const controls1 = document.querySelectorAll(".control-1");

// let currentItem1 = 0;
// const items1 = document.querySelectorAll(".item-1");

// const maxItems1 = items1.length;

// controls1.forEach(control1 => {
//     control1.addEventListener("click", () => {
//         const isLeft1 = control1.classList.contains("arrow-left-1");

//         if (isLeft1) {
//             currentItem1 -= 1;
//         } else {
//             currentItem1 += 1;
//         }

//         if (currentItem1 >= maxItems1) {
//             currentItem1 = 0;
//         }

//         if (currentItem1 < 0) {
//             currentItem1 = maxItems1 - 1;
//         }


//         items1.forEach(item1 => item1.classList.remove('current-item-1'));

//     items1[currentItem1].scrollIntoView({
//             inLine: "center",
//             behavior: "smooth",
//             block: "nearest",
//         });

//         items1[currentItem1].classList.add('current-item-1')
//     });
// });

/* SLIDER 2 */

// const controls2 = document.querySelectorAll(".control-2");

// let currentItem2 = 0;
// const items2 = document.querySelectorAll(".item-2");

// const maxItems2 = items2.length;

// controls2.forEach(control2 => {
//     control2.addEventListener("click", () => {
//         const isLeft2 = control2.classList.contains("arrow-left-2");

//         if (isLeft2) {
//             currentItem2 -= 1;
//         } else {
//             currentItem2 += 1;
//         }

//         if (currentItem2 >= maxItems2) {
//             currentItem2 = 0;
//         }

//         if (currentItem2 < 0) {
//             currentItem2 = maxItems2 - 1;
//         }


//         items2.forEach(item2 => item2.classList.remove('current-item-2'));

//     items2[currentItem2].scrollIntoView({
//             inLine: "center",
//             behavior: "smooth",
//             block: "nearest",
//         });

//         items2[currentItem2].classList.add('current-item-2')
//     });
// });

/* SLIDER 3 */

// const controls3 = document.querySelectorAll(".control-3");

// let currentItem3 = 0;
// const items3 = document.querySelectorAll(".item-3");

// const maxItems3 = items3.length;

// controls3.forEach(control3 => {
//     control3.addEventListener("click", () => {
//         const isLeft3= control3.classList.contains("arrow-left-3");

//         if (isLeft3) {
//             currentItem3 -= 1;
//         } else {
//             currentItem3 += 1;
//         }

//         if (currentItem3 >= maxItems3) {
//             currentItem3 = 0;
//         }

//         if (currentItem3 < 0) {
//             currentItem3 = maxItems3 - 1;
//         }


//         items3.forEach(item3 => item3.classList.remove('current-item-3'));

//     items3[currentItem3].scrollIntoView({
//             inLine: "center",
//             behavior: "smooth",
//             block: "nearest",
//         });

//         items3[currentItem3].classList.add('current-item-3')
//     });
// });

/* MENU ATIVO */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .text, #home .link, #why .text, #why .square,
    #services .text, #services .card, #public, #public a, #methodology .text, #methodology .breathing, #methodology .estrategy, #methodology .synthesis , #portifolio .line, #portifolio .text, #portifolio h1, .gallery-1, .gallery-2, .gallery-3, 
    #portifolio a, #about img , #about .text h1, #about .text p, #about .text a
    `,
    { interval: 65 }
    )


    document.addEventListener("DOMContentLoaded", function() {
        const menuLinks = document.querySelectorAll("nav li a");
        const sections = document.querySelectorAll("section");
    
        function setActiveLink() {
        const scrollPosition = window.scrollY;
    
        sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");
    
        if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight - 50) {
            menuLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
            }
            });
        }
        });
        }
    
        window.addEventListener("scroll", setActiveLink);
    });
    
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight
    
    function changeHeaderWhenScroll() {
        if (window.scrollY >= navHeight) {
            // scroll é maior que a altura do header
    
            header.classList.add('scroll')
        } else {
            // menor que a altura do header
            header.classList.remove('scroll')
        }
    }

    const backToTopButton = document.querySelector('.back-to-top')

    function backToTop() {
        if (window.scrollY >= 560) {
            backToTopButton.classList.add('show')
        } else {
            backToTopButton.classList.remove('show')
        }
    }

    const sections = document.querySelectorAll('main section[id]')
    function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd) {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')
        } else {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}

// ABRE E FECHA O MENU QUANDO CLICAR NO ICONE: HAMBURGUER E X
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

// QUANDO CLICAR EM UM ITEM DO MENU, ESCONDER O MENU

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

function showMore () {
    let maisTexto=document.getElementById("mais");
    let leiaMais=document.getElementById("more");

    if (maisTexto.style.display === "inline") {
        maisTexto.style.display="none";
        leiaMais.innerHTML="+"
    } else {
        maisTexto.style.display="inline";
        leiaMais.innerHTML="-"
    }
}

function showMoreTwo () {
    let maisTextoTwo=document.getElementById("maisTwo");
    let leiaMaisTwo=document.getElementById("moreTwo");

    if (maisTextoTwo.style.display === "inline") {
        maisTextoTwo.style.display="none";
        leiaMaisTwo.innerHTML="+"
    } else {
        maisTextoTwo.style.display="inline";
        leiaMaisTwo.innerHTML="-"
    }
}

function showMoreThree () {
    let maisTextoThree=document.getElementById("maisThree");
    let leiaMaisThree=document.getElementById("moreThree");

    if (maisTextoThree.style.display === "inline") {
        maisTextoThree.style.display="none";
        leiaMaisThree.innerHTML="+"
    } else {
        maisTextoThree.style.display="inline";
        leiaMaisThree.innerHTML="-"
    }
}

    
    window.addEventListener('scroll', function () {
        changeHeaderWhenScroll()
        backToTop()
        activateMenuAtCurrentSection()
    })
