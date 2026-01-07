// Simple script for logo fallback if SVG doesn't exist
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');
    
    // If logo image fails to load, create a text-based logo
    logo.addEventListener('error', function() {
        logo.style.display = 'none';
        
        const textLogo = document.createElement('div');
        textLogo.className = 'text-logo';
        textLogo.textContent = 'ROCHA BC';
        textLogo.style.cssText = `
            font-size: 2.5rem;
            font-weight: bold;
            color: #fff;
            margin: 0 auto;
            letter-spacing: 0.05em;
        `;
        logo.parentNode.insertBefore(textLogo, logo);
    });
    
    // Contact form modal functionality
    const forGymsBtn = document.getElementById('forGymsBtn');
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');
    const contactForm = document.getElementById('contactForm');
    
    // Open modal
    forGymsBtn.addEventListener('click', function() {
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        contactModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close modal when clicking overlay
    contactModal.addEventListener('click', function(e) {
        if (e.target === contactModal) {
            contactModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && contactModal.classList.contains('active')) {
            contactModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Handle form submission
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        try {
            const formData = new FormData(contactForm);
            
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Show success message
                submitButton.textContent = 'Message Sent!';
                submitButton.style.background = '#fff';
                submitButton.style.color = '#000';
                
                // Reset form and close modal after delay
                setTimeout(function() {
                    contactForm.reset();
                    contactModal.classList.remove('active');
                    document.body.style.overflow = '';
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                    submitButton.style.background = 'transparent';
                    submitButton.style.color = '#fff';
                }, 2000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // Show error message
            submitButton.textContent = 'Error - Try Again';
            submitButton.style.color = '#ff6b6b';
            
            setTimeout(function() {
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
                submitButton.style.color = '#fff';
            }, 3000);
        }
    });
});

