// Toggle Mobile Navbar
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

  // WhatsApp functionality
        document.getElementById('whatsappBtn').addEventListener('click', function(e) {
            e.preventDefault();
            
            // METHOD 1: Using phone number (RECOMMENDED)
            // Your WhatsApp number: +918789140160
            // Remove the + sign and use: 918789140160
            const phoneNumber = '918789140160';
            
            // Optional: Pre-filled message
            const message = 'Hi! I found your portfolio and would like to connect.';
          
            // METHOD 2: Using direct WhatsApp link (if you have a custom WhatsApp business link)
            // Uncomment the line below and replace with your custom link
            const whatsappURL = 'https://wa.me/qr/https://wa.link/vfbbqc';
            
            // METHOD 3: Using WhatsApp Business API link (if you have one)
            // const whatsappURL = 'https://api.whatsapp.com/send?phone=919876543210&text=' + encodeURIComponent(message);
            
            // Open WhatsApp
            window.open(whatsappURL, '_blank');
        });

        // Add some smooth scrolling and interactions
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Smooth scroll for any anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
// Modal Functionality
const modal = document.getElementById('modal');
const modalBtn = document.querySelector('.btn-modal');
const closeModalBtns = document.querySelectorAll('.close-modal');

if (modal && modalBtn && closeModalBtns) {
  modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeModalBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// Toggle About Section
const toggleBtn = document.getElementById('toggleBtn');
const aboutSection = document.querySelector('.about-section');

if (toggleBtn && aboutSection) {
  toggleBtn.addEventListener('click', () => {
    aboutSection.classList.toggle('expanded');
    toggleBtn.textContent = aboutSection.classList.contains('expanded') ? 'Read Less' : 'Read More';
  });
}

// Animation for Progress Bars
document.addEventListener('DOMContentLoaded', () => {
  // Initialize progress bars
  const progressBars = document.querySelectorAll('.progress-fill');
  progressBars.forEach((bar) => {
    const width = bar.getAttribute('data-width');
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });

  // Intersection Observer for animation on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.animated').forEach((item) => {
    observer.observe(item);
  });

  // Add staggered animation delay
  document.querySelectorAll('.skill-category').forEach((category, index) => {
    category.style.transitionDelay = `${index * 0.1}s`;
  });
});

// Experience Toggle
document.addEventListener('DOMContentLoaded', () => {
  const experienceToggle = document.getElementById('experience-toggle');
  const noExperienceSection = document.getElementById('no-experience');
  const experienceSection = document.getElementById('experience-section');

  if (experienceToggle && noExperienceSection && experienceSection) {
    // Initial state based on toggle
    updateExperienceVisibility();

    // Toggle event listener
    experienceToggle.addEventListener('change', updateExperienceVisibility);

    function updateExperienceVisibility() {
      if (experienceToggle.checked) {
        // Beginner mode - show "no experience" message
        noExperienceSection.style.display = 'block';
        experienceSection.style.display = 'none';
      } else {
        // Experienced mode - show projects
        noExperienceSection.style.display = 'none';
        experienceSection.style.display = 'block';
      }
    }
  }
});

  const form = document.getElementById('contactForm');
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('closePopupBtn');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple validation (HTML5 validation takes care mostly)
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Show popup
    popup.classList.add('active');
    // Set focus on popup for accessibility
    popup.querySelector('.popup-content').focus();

    // Clear form fields
    form.reset();
  });

  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
    // Return focus to the submit button after popup closes
    form.querySelector('button[type="submit"]').focus();
  });

  // Close popup with ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains('active')) {
      popup.classList.remove('active');
      form.querySelector('button[type="submit"]').focus();
    }
  });