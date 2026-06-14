// Password gate - shows preview, locks scrolling until authenticated
(function() {
    const correctPassword = 'kg-miltech-2026';
    const authenticated = sessionStorage.getItem('miltech_auth');
    
    if (authenticated === 'true') {
        return; // Already authenticated
    }
    
    // Lock scrolling and show only top portion
    document.body.style.overflow = 'hidden';
    document.body.style.maxHeight = '100vh';
    
    // Add overlay after a brief preview moment
    setTimeout(function() {
        const overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(10,37,64,0.95);z-index:9999;display:flex;align-items:center;justify-content:center;';
        overlay.innerHTML = '<div style="background:white;padding:3rem;border-radius:12px;max-width:500px;text-align:center;"><h2 style="color:#0A2540;margin-bottom:1rem;">Premium Intelligence Report</h2><p style="color:#475569;margin-bottom:2rem;">Enter password to access full report with data visualizations and insights.</p></div>';
        document.body.appendChild(overlay);
        
        // Prompt for password
        const userPassword = prompt('Enter password to access this report:');
        
        if (userPassword === correctPassword) {
            sessionStorage.setItem('miltech_auth', 'true');
            document.body.removeChild(overlay);
            document.body.style.overflow = 'auto';
            document.body.style.maxHeight = 'none';
        } else if (userPassword === null) {
            window.location.href = '/index.html';
        } else {
            alert('Incorrect password.');
            window.location.href = '/index.html';
        }
    }, 2000); // 2 second preview
})();
