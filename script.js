function faq_question() {
    const faq_item = document.querySelectorAll('.question_group');
    faq_item.forEach((item) => {
        const faq_header = item.querySelector('.question_header');
        faq_header.addEventListner('click', () => {
            toogleitem(item);
            const openitem = document.querySelector('.faq-open');
            if (openitem && openitem !== item) {
                toogleitem(openitem);
            }
        })
    })
    const toogleitem = (item) => {
        const faq_description = item.querySelector('.question_description');
        if (item.classList.contains('faq-open')) {
            faq_description.removeAttribute('style');
            item.classList.remove('faq-open');
        }
        else {
            faq_description.style.height = faq_description.scrollHeight + 'px';
            item.classList.add('faq-open');
        }
    }
}
// faq_question();


function scroll_div_active_link() {
    const div = document.querySelectorAll('div[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        div.forEach(current => {
            const divHeight = current.offsetHeight,
                divTop = current.offsetTop - 58,
                divId = current.getAttribute('id');

            const navLink = document.querySelector('#nav-part-2 a[href*=' + divId + ']');

            if (navLink) {
                if (scrollY > divTop && scrollY <= divTop + divHeight) {
                    navLink.classList.add('active-link');
                } else {
                    navLink.classList.remove('active-link');
                }
            }
        });
    }

    window.addEventListener('scroll', scrollActive);
}
scroll_div_active_link();


function scroll_up() {
    const scrollUp = document.getElementById('scroll-up');

    function handleScroll() {
        // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if (window.scrollY >= 300) {
            scrollUp.classList.add('show-scroll');
            console.log("hello");
        } else {
            scrollUp.classList.remove('show-scroll');
        }
    }

    // Attach the scroll event listener to the window object
    window.addEventListener('scroll', handleScroll);

}
scroll_up();


function dark_theme() {
    document.addEventListener('DOMContentLoaded', () => {
        const themeButton = document.getElementById('theme-button');
        const darkTheme = 'dark-theme';
        const iconTheme = 'ri-sun-line';

        // Previously selected topic (if user selected)
        const selectedTheme = localStorage.getItem('selected-theme');
        const selectedIcon = localStorage.getItem('selected-icon');

        // We obtain the current theme that the interface has by validating the dark-theme class
        const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
        const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

        // We validate if the user previously chose a topic
        if (selectedTheme) {
            // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
            document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
            themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
        }

        // Activate / deactivate the theme manually with the button
        themeButton.addEventListener('click', () => {
            // Add or remove the dark / icon theme
            document.body.classList.toggle(darkTheme);
            themeButton.classList.toggle(iconTheme);
            // We save the theme and the current icon that the user chose
            localStorage.setItem('selected-theme', getCurrentTheme());
            localStorage.setItem('selected-icon', getCurrentIcon());
            console.log('Theme changed to:', getCurrentTheme());
            console.log('Icon changed to:', getCurrentIcon());
        });
    });

}
dark_theme();


function gsap_animation() {
    function gsap_animation_1() {
        var time = gsap.timeline();
        time.from("#nav-part-1", {
            x: -100,
            duration: 1,
            delay: 1,
            opacity: 0,
        })
        time.from("#nav-part-2", {
            y: -100,
            duration: 1,
            // delay:1,
            opacity: 0,
            stagger: 0.9,
        })
        gsap.from("#home-part-1", {
            x: -100,
            duration: 1,
            delay: 2.5,
            opacity: 0,
        })
        gsap.from("#home-part-2", {
            x: 100,
            duration: 1,
            delay: 2.5,
            opacity: 0,
        })
        gsap.from("#home-part-3", {
            duration: 1,
            delay: 2.5,
            opacity: 0,
            scale: 2,
        })
    }
    gsap_animation_1();

    function gsap_animation_2(){
        gsap.from("#about #about-part-1 img",{
            x:-100,
            opacity:0,
            delay:1,
            scrollTrigger:{
                scrub:2,
                // markers:true,
                trigger:"#about #about-part-1 img",
                scroller:"body",
                start:"top 50%",
                end:"top 10%"
            }
        })
        gsap.from("#about #about-part-2",{
            x:100,
            opacity:0,
            delay:1,
            scrollTrigger:{
                scrub:2,
                // markers:true,
                trigger:"#about #about-part-2",
                scroller:"body",
                start:"top 50%",
                end:"top 10%"
            }
        })
    }
    gsap_animation_2();
}
gsap_animation();


function cursor(){
    const cursor = document.getElementById('cursor');
    const clickableElements = document.querySelectorAll('a, button, #button');

    document.addEventListener('mousemove', (e) => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    });

    // clickableElements.forEach(el => {
    //     el.addEventListener('mouseover', () => {
    //         cursor.style.transform = 'scale(1.5)'; // Enlarge cursor on hover
    //     });

    //     el.addEventListener('mouseout', () => {
    //         cursor.style.transform = 'scale(1)'; // Reset cursor size
    //     });
    // });

    // document.addEventListener('click', () => {
    //     cursor.style.transform = 'scale(0.8)'; // Click animation
    //     setTimeout(() => {
    //         cursor.style.transform = 'scale(1)';
    //     }, 150);
    // });
}

cursor();







