// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navHeight = document.querySelector('#navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Combine all scroll event handlers for better performance
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add scroll effect to navbar
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#000';
    } else {
        navbar.style.backgroundColor = '#1a1a1a';
    }
    
    // Highlight active navigation link on scroll
    let current = '';
    const navHeight = navbar.offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        if (window.pageYOffset >= (sectionTop - navHeight - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '#fff';
        link.style.backgroundColor = 'transparent';
        
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#ff6b35';
            link.style.backgroundColor = 'rgba(255, 107, 53, 0.1)';
        }
    });
});

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Sanitize inputs for display (escape HTML)
    const sanitize = (str) => {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    };
    
    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    
    // Display success message
    alert(`Thank you, ${safeName}! We've received your message and will get back to you soon at ${safeEmail}.`);
    
    // Reset form
    this.reset();
});
