// Password gate for reports only - kg-miltech-2026
(function() {
    const correctPassword = 'kg-miltech-2026';
    const authenticated = sessionStorage.getItem('miltech_auth');
    
    if (authenticated === 'true') {
        return; // Already authenticated this session
    }
    
    // Hide body content initially
    document.body.style.display = 'none';
    
    // Check password
    const userPassword = prompt('Enter password to access this report:');
    
    if (userPassword === correctPassword) {
        sessionStorage.setItem('miltech_auth', 'true');
        document.body.style.display = 'block';
    } else if (userPassword === null) {
        // User clicked Cancel - go back to landing page
        window.location.href = '/index.html';
    } else {
        // Wrong password - go back to landing page
        alert('Incorrect password.');
        window.location.href = '/index.html';
    }
})();
