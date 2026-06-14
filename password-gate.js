// Simple password gate - kg-miltech-2026
(function() {
    const correctPassword = 'kg-miltech-2026';
    const authenticated = sessionStorage.getItem('miltech_auth');
    
    if (authenticated === 'true') {
        return; // Already authenticated this session
    }
    
    // Hide body content initially
    document.body.style.display = 'none';
    
    // Check password
    const userPassword = prompt('Enter password to access Ukrainian Defense Tech Intelligence:');
    
    if (userPassword === correctPassword) {
        sessionStorage.setItem('miltech_auth', 'true');
        document.body.style.display = 'block';
    } else {
        alert('Incorrect password. Access denied.');
        window.location.href = 'about:blank';
    }
})();
