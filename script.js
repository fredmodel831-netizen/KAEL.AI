const sr = ScrollReveal({ 
    origin: 'bottom', 
    distance: '60px', 
    duration: 1200, 
    delay: 200, 
    reset: false  
}); 
 

sr.reveal('.hero-badge', { delay: 100 }); 
sr.reveal('.hero h1', { delay: 300 }); 
sr.reveal('.hero p', { delay: 500 }); 
sr.reveal('.hero-actions', { delay: 700 }); 
 

sr.reveal('.project-card', {  
    interval: 200, 
    origin: 'bottom', 
    scale: 0.9  
}); 
 

sr.reveal('.contact-info', { origin: 'left' }); 
sr.reveal('.contact-card', { origin: 'right' }); 
 

window.addEventListener('scroll', () => { 
    const header = document.querySelector('.header'); 
    if (window.scrollY > 50) { 
        header.style.background = 'rgba(5, 7, 10, 0.9)'; 
        header.style.padding = '0.8rem 0'; 
    } else { 
        header.style.background = 'transparent'; 
        header.style.padding = '1.2rem 0'; 
    } 
}); 

sr.revael('.skill-item',{interval:150});
sr.reveal('.vision-card',{origin:'right',delay:400});
 
