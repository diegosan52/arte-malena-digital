document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Smooth follow for outline
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover effects for cursor
    const interactiveElements = document.querySelectorAll('a, .menu-toggle, .view-project');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '70px';
            cursorOutline.style.height = '70px';
            cursorOutline.style.backgroundColor = 'rgba(255, 0, 85, 0.2)'; // Pink splash
            cursorOutline.style.borderColor = 'transparent';
            cursorOutline.animate({
                transform: ['translate(-50%, -50%) scale(1)', 'translate(-50%, -50%) scale(1.1)']
            }, { duration: 500, iterations: Infinity, direction: 'alternate' });
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '50px';
            cursorOutline.style.height = '50px';
            cursorOutline.style.backgroundColor = 'transparent';
            cursorOutline.style.borderColor = 'var(--c-cyan)';
            cursorOutline.getAnimations().forEach(anim => anim.cancel()); // Stop pulsing
        });
    });

    // Navigation Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navOverlay = document.getElementById('nav-overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', () => {
        navOverlay.classList.toggle('active');

        // Animate links
        if (navOverlay.classList.contains('active')) {
            navLinks.forEach((link, index) => {
                link.style.opacity = '0';
                link.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    link.style.transition = '0.5s ease';
                    link.style.opacity = '1';
                    link.style.transform = 'translateY(0)';
                }, 200 * (index + 1));
            });
        }
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navOverlay.classList.remove('active');
        });
    });

    // Scroll Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.project-info, .section-title, .about-text');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 1s ease, transform 1s ease';
        observer.observe(el);
    });

    // Add class when in view
    window.addEventListener('scroll', () => {
        animateElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    });
});
